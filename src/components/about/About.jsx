import "./about.css";

import backgImg from "../../assets/aboutBackg.png";
import aboutImg from "../../assets/aboutImg.png";

function About() {
  return (
    <div className="about">
      <div className="about-background_img">
        <img src={backgImg} alt="" />
      </div>
      <div className="about-main">
        <h1>ABOUT ME</h1>
        <img src={aboutImg} alt="" />
      </div>
    </div>
  );
}

export default About;
