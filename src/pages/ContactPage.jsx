import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./ContactPage.scss";
import { Button } from "../components/Button/Button";
import { Input } from "../components/ContactPage/Input";
import { H2 } from "../components/Heading/Heading";
import { Template } from "./Template/Template";

import GridDecor from "../images/decorations/grid.svg";
import VideoDecor from "../images/decorations/video.svg";
import LaptopDecor from "../images/png/laptop.png";
import { Init } from "../components/Animations/Init";

import { motion } from "framer-motion";

const emailUrl = "http://localhost:5000/mail/sendEmail";

const text = (
  <p>
    Thanks for taking the time to reach out. If you wanna get in touch, talk to
    me about a project collaboration or just say hi, fill up the awesome form
    below or send an email to{" "}
    <a href="mailto:gunardi@gmail.com">
      <span className="blue-text">gunardi.ivan@gmail.com</span>
    </a>{" "}
    and let's talk!
  </p>
);

export const ContactPage = () => {
  const [name, setName] = useState({ value: "", isValid: false });
  const [email, setEmail] = useState({ value: "", isValid: false });
  const [content, setContent] = useState({ value: "", isValid: false });
  const [loading, setLoading] = useState(false);

  const sendEmail = async (data) => {
    try {
      axios.post(emailUrl, data);
    } catch (err) {
      toast.dark(`Sorry! An error occurred, please try again :"`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const isContentValid = name.isValid && email.isValid && content.isValid;
    const data = {
      name: name.value,
      email: email.value,
      content: content.value,
    };
    if (!isContentValid) {
      toast.dark("Oops! Please complete the form!");
    } else {
      await sendEmail(data);
      toast.dark("Thank you! I will reply to you soon!");
      // console.log(data);
      setName({ value: "", isValid: false });
      setEmail({ value: "", isValid: false });
      setContent({ value: "", isValid: false });
    }
    setLoading(false);
  };

  return (
    <Template>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="contact">
          <div className="contact-decorations">
            <img
              src={GridDecor}
              alt="decor"
              className="decorations decorations-back decorations-contact-grid"
              // style={{ width: "30vw", maxWidth: "300px" }}
            />
            <img
              src={VideoDecor}
              alt="decor"
              className="decorations decorations-back decorations-contact-video"
            />
            <img
              src={LaptopDecor}
              alt="decor"
              className="decorations decorations-back decorations-contact-laptop"
            />
          </div>
          <div className="contact-container">
            <Init>
              <H2>Let'sConnect</H2>
            </Init>
            <Init delay={0.2}>{text}</Init>
            <Init delay={0.4}>
              <form className="contact-form">
                <div className="upper-form">
                  <Input
                    value={name}
                    label="Name"
                    placeholder="Hello there!"
                    onChange={setName}
                    autofocus
                    validators={{
                      max: 100,
                      required: true,
                    }}
                  />
                  <Input
                    value={email}
                    label="Email"
                    placeholder="have@nice.day"
                    onChange={setEmail}
                    validators={{
                      max: 100,
                      required: true,
                      isEmail: true,
                    }}
                  />
                </div>
                <Input
                  value={content}
                  label="Message"
                  placeholder="What's going on?"
                  onChange={setContent}
                  validators={{
                    required: true,
                  }}
                  textarea
                />
                <Button
                  label="Send"
                  loading={loading}
                  onClick={handleSubmit}
                  primary
                />
              </form>
            </Init>
          </div>
        </div>
      </motion.div>
    </Template>
  );
};
