import AnchorLink from "react-anchor-link-smooth-scroll";

import "./Hero.css";
import profile_img from "../../assets/profile.svg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Roger John Zeller</span> Senior Software Engineer
      </h1>
      <p>
        I am a Full Stack Software Engineer and overall IT expert from New
        Hampshire, USA with over 10 years of experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
