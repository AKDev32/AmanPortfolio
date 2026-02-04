import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an aspiring <span className="purple">Software Engineer</span>{" "}
              who enjoys transforming ideas into reliable, scalable software
              solutions. Over time, I’ve explored multiple technologies and
              discovered a strong interest in building high-performance systems
              and intuitive user experiences.
              <br />
              <br />
              I’m proficient in{" "}
              <i>
                <b className="purple">
                  JavaScript, Java, Data Structures & Algorithms, and Node.js
                </b>
              </i>
              , and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My core interests include developing{" "}
              <i>
                <b className="purple">Web Applications and Problem-Solving</b>
              </i>
              , with a continuous focus on strengthening my understanding of{" "}
              <span className="purple">Data Structures & Algorithms</span>.
              <br />
              <br />
              Whenever possible, I enjoy building projects using{" "}
              <b className="purple">Node.js</b> along with modern frameworks
              such as{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
