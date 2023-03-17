import React from "react";
import twitter from "../../Images/icons8-вконтакте-100.png";
import github from "../../Images/icons8-github-100.png";
import insta from "../../Images/icons8-instagram-100.png";
import telega from "../../Images/icons8-телеграмма-app-24.png";
import Home from "../../Images/icons8-главная-страница-100.png";

import { Link } from "react-router-dom";
const linkStyle = { color: "black", textDecoration: "none" };

const Header = () => {
  return (
    <div className="wrapper">
      <div className="nav_left">
        <h2 className="name">Beishenbaeva Diana</h2>
        <h5 className="prof">Web Developer</h5>
        <img
          className="sidebar_image"
          src="https://avatars.dzeninfra.ru/get-zen_doc/1040957/pub_5c8c027267fa3e00b3987443_5c8c032731b65e00b39300bf/scale_1200"
          alt=""
        />
        <div className="info">
          <p>Name: Diana Beishenbaeva</p>
          <p> Birhday: 23 July 2002</p>
          <p>Job: Web Developer </p>
          <p>Email: diana586@gmail.com</p>
          <p> Skype: diana2307</p>
        </div>
      </div>

      <div className=" nav_right">
        <nav>
          <div className="nav_list">
            <ul>
              <Link style={linkStyle} to="/">
                <li>
                  <img className="logo_home" src={Home} alt="" />
                </li>
              </Link>
              <Link style={linkStyle} to="/resume">
                <li>Resume</li>
              </Link>
              <Link style={linkStyle} to="/portfolio">
                <li>Portfolio</li>
              </Link>
              <Link style={linkStyle} to="/blog">
                <li>Skills</li>
              </Link>
              <Link style={linkStyle} to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div className="nav_logo">
            <ul>
              <Link style={linkStyle} to="https://vk.com/diana230702">
                <li>
                  <img className="img_logo" src={twitter} alt="" />
                </li>
              </Link>

              <Link style={linkStyle} to="https://github.com/Diana230702">
                <li>
                  <img className="img_logo" src={github} alt="" />
                </li>
              </Link>

              <Link
                style={linkStyle}
                to="https://instagram.com/beishenbaeva02?igshid=YmMyMTA2M2Y="
              >
                <li>
                  <img className="img_logo" src={insta} alt="" />
                </li>
              </Link>
              <li>
                <Link style={linkStyle} to="https://t.me/Beishenbaeva_diana">
                  <button className="nav_button">
                    Hire me
                    <img className="img_telega" src={telega} alt="" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
