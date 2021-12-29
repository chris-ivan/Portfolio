import React, { useState } from "react";
// import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./ContactPage.scss";

import { Button } from "../components/Button/Button";
import { Input } from "../components/ContactPage/Input";
import { H2 } from "../components/Heading/Heading";
import { Template } from "./Template/Template";
import { CONTACT_ACTION, sendAnalyticsAction } from "../shared/AnalyticActions";

import GridDecor from "../images/decorations/grid.svg";
import VideoDecor from "../images/decorations/video.svg";
import LaptopDecor from "../images/png/laptop.png";
import { Init } from "../components/Animations/Init";

// const emailUrl = "https://api.chris-ivan.studio/mail/sendEmail";

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

  const sendEmail = (data) => {
    setLoading(true);
    sendAnalyticsAction(CONTACT_ACTION, "Sending a valid email");
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(() => {
        toast.dark("Thank you! I will reply to you soon!");
        setName({ value: "", isValid: false });
        setEmail({ value: "", isValid: false });
        setContent({ value: "", isValid: false });
      })
      .catch(() => {
        toast.dark(`Sorry! An error occurred, please try again :"`);
        sendAnalyticsAction(CONTACT_ACTION, "Email not delivered");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendAnalyticsAction(CONTACT_ACTION, "Clicked the CTA");
    const isContentValid = name.isValid && email.isValid && content.isValid;
    const data = {
      from_name: name.value,
      from_email: email.value,
      message: content.value,
    };
    if (!isContentValid) {
      toast.dark("Oops! Please complete the form!");
    } else {
      await sendEmail(data);
    }
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
              alt=""
              className="decorations decorations-back decorations-contact-grid"
              // style={{ width: "30vw", maxWidth: "300px" }}
            />
            <img
              src={VideoDecor}
              alt=""
              className="decorations decorations-back decorations-contact-video"
            />
            <img
              src={LaptopDecor}
              alt=""
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
