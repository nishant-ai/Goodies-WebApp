import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// SmoothScroll
import { Link as HashLink } from "react-scroll";

// Images
import MenuIcon from "../../assets/NavIcon.svg";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/goodie.png";

function Navbar() {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <div className="Navbar">
      <div
        style={{
          backgroundImage: `url(${Logo})`,
        }}
        className="Logo"
      >
        <Link
          style={{
            width: "100%",
            height: "100%",
          }}
          to="/"
        ></Link>
      </div>

      <div className="NavRight">
        <img
          onClick={() => setNavMenu(true)}
          className="NavRightIcon"
          src={MenuIcon}
          alt="MENU"
        />
      </div>
      <div
        style={{
          right: !navMenu && "-40%",
        }}
        className="NavMenu"
      >
        <div className="NavMenuClose">
          <CloseIcon fontSize="large" onClick={() => setNavMenu(false)} />
        </div>
        <div className="NavMenuItem">
          <Link className="Link" to="/zero">
            About
          </Link>
        </div>
        <div className="NavMenuItem">
          <HashLink
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="products"
            onClick={() => setNavMenu(false)}
          >
            Products
          </HashLink>
        </div>
        <div className="NavMenuItem">Login</div>
        <div className="NavMenuItem">Signup</div>
      </div>
    </div>
  );
}

export default Navbar;
