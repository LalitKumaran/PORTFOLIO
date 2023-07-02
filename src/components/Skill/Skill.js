import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function Skill() {
  return (
    <Container fluid className="skill-section" id="skill">
      <Particle />
        <h1 className="project-heading">
          Professional <strong className="orange">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="orange">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
    </Container>
  );
}

export default Skill;