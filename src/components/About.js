import React from "react";
import Links from "./Links"; // ✅ make sure this path is correct

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} /> {/* ✅ rendering Links */}
    </div>
  );
}

export default About;
