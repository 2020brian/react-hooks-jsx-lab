import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="About">
    <h2>About me</h2>
    <p>Assignment</p>
    <img src={image} alt=  "I made this"></img>
  </div>;
}

export default About;
