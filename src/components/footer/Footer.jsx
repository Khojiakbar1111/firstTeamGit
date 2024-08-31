import { NavLink } from "react-router-dom";
import "./footer.css";

import footerIcon from "../../assets/footerIcon.png";
import { FaArrowUp } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <footer>
      <ul className="footer-links" id="footer">
        <li>
          <AnchorLink href="#home" offset={50}>
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about" offset={50}>
            About me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#portfolio" offset={50}>
            Portfolio
          </AnchorLink>
        </li>
        <li>
          <NavLink href="#contact" offset={50}>
            Contact
          </NavLink>
        </li>
      </ul>
      <ul className="footer-contact">
        <li>Contact</li>
        <li>
          <NavLink to="/email">Email: notitanic33@gmail.com</NavLink>
        </li>
        <li>
          <NavLink to="/accinsta">Inst: notitanic33</NavLink>
        </li>
        <li>
          <NavLink to="/callnumber">Calls: +7 (900) - 121 - 54 -54</NavLink>
        </li>
      </ul>
      <div className="footer-icons">
        <div className="footer-icon">
          <img src={footerIcon} alt="Footer Icon" />
          <AnchorLink href="#header">
            <button title="Back to Top">
              <FaArrowUp />
            </button>
          </AnchorLink>
        </div>
        <p>Copyright © 2021, Notitanic</p>
      </div>
    </footer>
  );
}

export default Footer;
