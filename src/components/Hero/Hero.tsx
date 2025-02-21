import "./Hero.css";
import profile_img from "../../assets/profile.svg";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Roger John Zeller</span> Senior Software Engineer
      </h1>
      <p>
        I am a Full Stack Software Engineer and overall IT expert from New
        Hampshire, USA with over 10 years of experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
