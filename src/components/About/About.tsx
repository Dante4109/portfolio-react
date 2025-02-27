import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Full Stack Developer with over 10 years of
              experience.
            </p>
            <p>
              My passion for development is not only blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{width: "70%"}} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{width: "80%"}} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{width: "100%"}} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{width: "50%"}} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>55+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};
export default About;
