import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail} from "react-icons/si";

function Contact() {
  return (
    <Container fluid className="home-about-section" id="contact">
    <Container>
    <Row>
      <Col md={12} className="contact-social">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="orange">connect </span>with me
        </p>
        <ul className="contact-social-links">

        <li className="social-icons">
            <a
              href="mailto:lalitkumaran1602@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <SiGmail />
            </a>
          </li>

          <li className="social-icons">
            <a
              href="https://github.com/LalitKumaran"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/lalit-k-087680246/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/lalit_k_vijay?igshid=MzNINGNkZWQ4Mg=="
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </Col>
    </Row>
    </Container>
    </Container>
  );
}

export default Contact;
