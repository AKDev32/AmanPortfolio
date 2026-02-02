import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Aman Kumar</span> from{" "}
            <span className="purple">Jalandhar, Punjab, India</span>.
            <br />I am an aspiring{" "}
            <span className="purple">Software Engineer</span>.
            <br />
            I’m currently pursuing a{" "}
            <span className="purple">Bachelor of Technology</span> in{" "}
            <span className="purple">Computer Science and Engineering</span>{" "}
            with a specialization in{" "}
            <span className="purple">Software Engineering</span> from{" "}
            <span className="purple">Punjab Technical University (PTU)</span>.
            <br />
            <br />
            Outside of coding, I enjoy engaging in activities that keep me
            creative, curious, and inspired.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Tech & Self-Growth Content 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Improving software quality through strong fundamentals in DSA and
            system design.
          </p>
          <footer className="blockquote-footer">Aman Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
