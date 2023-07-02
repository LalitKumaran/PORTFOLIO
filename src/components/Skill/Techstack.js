import React from "react";
import { Col, Row } from "react-bootstrap";
import { GiChiliPepper } from "react-icons/gi";
import {
  DiJavascript,
  DiReact,
  DiBootstrap,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMysql
} from "react-icons/si";
import { FaCuttlefish } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaCuttlefish />
        <p className="tech-icon-name">C</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p className="tech-icon-name">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p className="tech-icon-name">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p className="tech-icon-name">SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
        <p className="tech-icon-name">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiChiliPepper />
        <p className="tech-icon-name">Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="tech-icon-name">Nodejs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-icon-name">Reactjs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <p className="tech-icon-name">Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="tech-icon-name">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> 
        <p className="tech-icon-name">Git</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col> */}
    </Row>
  );
}

export default Techstack;
