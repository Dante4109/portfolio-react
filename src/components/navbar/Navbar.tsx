import React from "react";
import "./Navbar.css";
import {useState} from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import underline from "../../assets/nav_underline.svg";
import logo from "../../assets/react.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} alt="" />
      <ul className="nav-menu">
        <img src="" alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="work">
            <p onClick={() => setMenu("work")}>Work</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">Connect with Me</div>
    </div>
  );
};

export default Navbar;
