import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="orange"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
                I am a passionate Web Developer and a budding Data Scientist. 
              {/* 🤷‍♂️ */}
              <br />
              <br />I have knowledge in Programming languages like
              <i>
                <b className="orange"> C, Java and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="orange">Web Technologies and Products </b> and
                also in the field of{" "}
                <b className="orange">
                  Data Science.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="orange">Flask, Node.js</b> and
              <i>
                <b className="orange">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="orange"> React.js and Vue.js</b>
              </i>
            </p>
          </Col>

          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
    
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
