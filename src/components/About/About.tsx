import "./About.css";
/* import profile_img from '../..' */

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={theme_pattern} alt"" />     */}
      </div>
      <div className="about-sections">
        <div className="about-left">
          {/* <img src={profile_img} alt="" /> */}
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
        </div>
      </div>
    </div>
  );
};
export default About;
