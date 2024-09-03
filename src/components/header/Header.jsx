import "./Header.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState("home");

  return (
    <header>
      <nav>
        <a href="#" className="logo" id="header">
          <img src={logo} alt="logo" />
          <h4>Notitanic</h4>
        </a>
        <ul>
          <li onClick={() => setMenu("home")}>
            <AnchorLink
              href="#home"
              offset={50}
              className={menu === "home" && "activeClass"}
            >
              Home
            </AnchorLink>
          </li>
          <li onClick={() => setMenu("about")}>
            <AnchorLink
              href="#about"
              offset={50}
              className={menu === "about" && "activeClass"}
            >
              About me
            </AnchorLink>
          </li>
          <li onClick={() => setMenu("portfolio")}>
            <AnchorLink
              href="#portfolio"
              offset={50}
              className={menu === "portfolio" && "activeClass"}
            >
              Portfolio
            </AnchorLink>
          </li>
          <li onClick={() => setMenu("contact")}>
            <AnchorLink
              href="#contact"
              offset={50}
              className={menu === "contact" && "activeClass"}
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
