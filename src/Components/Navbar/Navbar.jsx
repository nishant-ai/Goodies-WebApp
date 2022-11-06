import React, { useState } from "react";
import "./Navbar.css";

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
      ></div>
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
        <div className="NavMenuItem">About</div>
        <div className="NavMenuItem">Products</div>
        <div className="NavMenuItem">Login</div>
        <div className="NavMenuItem">Signup</div>
      </div>
    </div>
  );
}

export default Navbar;
