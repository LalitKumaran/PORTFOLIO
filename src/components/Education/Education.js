import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import { ImPointRight } from "react-icons/im";

function Education() {
  return (
    <Container fluid className="skill-section" id="education">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="orange">Qualifications</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p > {/* style={{ textAlign: "justify" }} */}
                  Hi Everyone, I am <span className="orange"> Lalit K. </span>
                    from{" "}
                    <span className="orange"> Chennai, Tamil Nadu, India.</span>
                    <br /> 
                    <br />
                    I am a final-year student pursuing a
                    <span className="orange"> B.E. in Computer Science </span> 
                    at <span className="orange"> Kongu Engineering College, Erode.</span>
                    <br />
                    <br />
                    Parallely, I am also pursuing a 
                    <span className="orange"> B.Sc. online degree in Data
                    Science and Programming </span>
                    from <span className="orange"> IIT, Madras.</span>
                    <br />
                    <br />
                    I completed my HSE at 
                    <span className="orange"> Springfield Matriculation Higher Secondary School, Chennai. </span>
                    <br />
                  </p>

                  {/* <ul>
                  <li className="about-activity">
                    <ImPointRight /> Playing Games
                  </li>
                </ul> */}

                  {/* <p style={{ color: "rgb(155 126 172)" }}>
                  "Strive to build things that make a difference!"{" "}
                </p>
                <footer className="blockquote-footer">Lalit</footer> */}

                </blockquote>
              </Card.Body>
            </Card>
          </Col>

          {/* <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col> */}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
