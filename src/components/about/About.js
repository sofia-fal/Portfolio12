import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function About({ innerRef }) {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <h2>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>
          <span className={Style.command}>cat about{firstName}</span>
        </h2>
        <p>
          <span style={{ color: info.baseColor }}>
            à propos de {firstName} <span className={Style.green}>(main)</span>{" "}
            $
          </span>{" "}
          {info.bio}
        </p>
      </>
    );
  }
function skillsText() {
  return (
    <>
      <h2>
        <span style={{ color: info.baseColor }}>
          {firstName}
          {info.lastName.toLowerCase()} $
        </span>{" "}
        <span className={Style.command}>cd skills/tools</span>
      </h2>
      <h3>
        <span style={{ color: info.baseColor }}>
          skills/tools <span className={Style.green}>(main)</span> $
        </span>{" "}
        ls
      </h3>
      {/* Solution 2: Utilisation de la balise h3 pour un titre structurel */}
      <h3>compétences</h3>
      <ul className={Style.skills}>
        {info.skills.proficientWith.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </>
  );
}


  function miscText() {
    return (
      <>
        <h2>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          <span className={Style.command}>cd hobbies/interests</span>
        </h2>
        <h3>
          <span style={{ color: info.baseColor }}>
            qualités/centres d'intérêts{" "}
            <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </h3>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      ref={innerRef}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
      id={"about"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
