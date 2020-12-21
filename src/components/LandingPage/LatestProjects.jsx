import React from "react";
import { H2 } from "../Heading/Heading";
import "./LatestProjects.scss";
import { ProjectPreview } from "./ProjectPreview";

import MZ from "../../images/jpg/milezero-background.jpg";
import TinyMZ from "../../images/jpg/milezero-background-min.jpg";
import MZTab from "../../images/png/ipad-mz.png";
import MZPhone from "../../images/png/android-mz.png";

import AMI from "../../images/jpg/ami-background.jpg";
import TinyAMI from "../../images/jpg/ami-background-min.jpg";
import AMITab from "../../images/png/ipad-ami.png";
import AMIPhone from "../../images/png/android-ami.png";
import { Init } from "../Animations/Init";

const mzDesc = (
  <p>
    a series of events held by IEEE ITB Student Branch in collaboration with
    Microsoft, Schneider Electric, and Indonesian Ministry of Research and
    Technology. The project consists of multiple training webinars, idea
    competition, and a summit-awarding day. <br />
    <br /> I created the <span className="blue-text">frontend</span> of the main
    and admin-panel website for the event using{" "}
    <span className="blue-text">React</span> connected to a Django backend.
  </p>
);

const amiDesc = (
  <p>
    Aku Masuk ITB (AMI) is an annual nationwide event held by Bandung Institute
    of Technology. The event includes open house and competitions for all high
    school students in Indonesia. <br />
    <br /> I designed the <span className="blue-text">UI/UX</span> in Figma and
    develop the <span className="blue-text">frontend</span> side using React.
  </p>
);

export const LatestProjects = () => {
  return (
    <div className="latestProjects-container">
      <Init>
        <H2>LatestProjects</H2>
      </Init>
      <Init>
        <ProjectPreview
          src={MZ}
          tinySrc={TinyMZ}
          title="Mile Zero Project"
          desc={mzDesc}
          tab={MZTab}
          phone={MZPhone}
          webUrl="milezeroproject.com"
          githubUrl="https://github.com/ravielze/MZ-FE"
          figmaUrl="https://www.figma.com/proto/oAU5qeWx8q5ChgTp3G6rlE/Milezero?scaling=scale-down-width&node-id=1341%3A4641"
          arrowUrl="/"
        />
      </Init>
      <Init>
        <ProjectPreview
          src={AMI}
          tinySrc={TinyAMI}
          title="Aku Masuk ITB 2021"
          desc={amiDesc}
          tab={AMITab}
          phone={AMIPhone}
          webUrl="http://akumasukitb.com/"
          githubUrl="https://github.com/Chris-Ivan/Web-AMI21"
          figmaUrl="https://www.figma.com/proto/HxkxUi9enVAU3ZpKAq7WgD/AMI-2021?scaling=scale-down&node-id=23%3A6"
          arrowUrl="/"
        />
      </Init>
    </div>
  );
};
