import React from "react";
import "./Footer.css";

// MUI
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterTitle">Connect With Us!</div>
      <div className="FooterConnect">
        <div className="Instagram FooterConLink">
          <InstagramIcon />
        </div>
        <div className="Facebook FooterConLink">
          <FacebookIcon />
        </div>
        <div className="LinkedIn FooterConLink">
          <LinkedInIcon />
        </div>
        <div className="Whatsapp FooterConLink">
          <WhatsAppIcon />
        </div>
      </div>
      <div className="FooterCopyright">TEAM ZERO</div>
    </div>
  );
}

export default Footer;
