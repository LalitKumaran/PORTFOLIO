import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import legendary from "../../Assets/Projects/legendary.png";
import ticketshow from "../../Assets/Projects/ticketshow.png";
import quickquiz from "../../Assets/Projects/quickquiz.png";
import mlcalci from "../../Assets/Projects/mlcalci.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import aom from "../../Assets/Projects/aom.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orange">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticketshow}
              isTeam="Individual Project"
              title="TicketShow"
              description="A movie ticket booking application with role-based login for Admin and user Admins can perform CRUD operations on Shows and Venues. It is built on Vue.js with bootstrap on the client side and FlaskAPI on the server side, along with SQL for the database. Redis, Celery, and Axios are some other libraries used."
              // ghLink="https://github.com/LalitKumaran"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={legendary}
              isTeam="Group Project"
              title="Legendary Motor Sports"
              description="An online market for pre-owned cars, providing a medium to connect buyers and sellers.
              A user can act both as a buyer and a seller from an account.
              It is a Python-based web application.
              It is built with Flask, SQLAlchemy, Jinja2 templates, HTML/CSS, Bootstrap, and JQuery."
              ghLink="https://github.com/LalitKumaran/Legendary_Motorsports"
              demoLink="https://legendarymotorsports.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickquiz}
              isTeam="Group Project"
              title="QuickQuiz"
              description="An online learning website with quizzes and tests for students on various topics. After attending quizzes and tests, students receive an overall ranking published in the leaderboard. It is a MERN stack Application where I worked on the client side with React.js, Bootstrap, and Axios."
              ghLink="https://github.com/LalitKumaran/quickquiz"
              demoLink="https://quickquiz-bc991.firebaseapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mlcalci}
              isTeam=""
              title="MultiLingual Calculator"
              description="A calculator displays the results in word form and translates those word forms from English to other languages.
              It is built with React.js, and translation is performed with the API libretranslate."
              ghLink="https://github.com/LalitKumaran/MultiLingual-Calculator"
              // demoLink=""    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aom}
              isTeam="Group Project"
              title="Aruna Oil Mills"
              description="A sales website for Aruna Oil Mills to showcase their Products and expand their sales online. It is a MERN stack Application where I worked on the server side with Node.js and MongoDB."
              ghLink="https://github.com/LalitKumaran/Consultency-AOM" 
              demoLink="https://arunaoilmill.onrender.com/"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isTeam="Individual Project"
              title="Personal Website"
              description="It is my personal website built with React.js, Bootstrap"
              ghLink="https://github.com/LalitKumaran/PORTFOLIO"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
