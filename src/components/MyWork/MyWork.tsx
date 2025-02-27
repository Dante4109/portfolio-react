import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import mywork_data from "./mywork_data";

import "./MyWork.css";

interface MyWork {
  w_no: number;
  w_name: string;
  w_img: string;
}

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work: MyWork, index: number) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
