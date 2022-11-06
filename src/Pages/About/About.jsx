import React from "react";
import "./About.css";

// Components
import Navbar from "../../Components/Navbar/Navbar";
import Team from "../../Components/Team/Team";

function About() {
  return (
    <div className="About">
      <Navbar />
      <Team />
    </div>
  );
}

export default About;
