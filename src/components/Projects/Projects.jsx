import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Pathfinder from "../../Assets/Projects/Path.png";
import CodeSnap from "../../Assets/Projects/CodeSnap.png";
import ColumnStore from "../../Assets/Projects/Column.png";
import LeetLogic from "../../Assets/Projects/LeetLogic.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LeetLogic}
              isBlog={false}
              title="LeetLogic"
              description="LeetLogic helps students prepare for coding interviews by providing 50+ company-wise previous year interview questions in one place.
                           It removes the need for paid tools like LeetCode Premium, making interview prep focused, affordable, and accessible."
              ghLink="https://github.com/AKDev32/LeetLogic"
              demoLink="https://leet-logic.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ColumnStore}
              isBlog={false}
              title="Column Store Database Engine"
              description="
Built a high-performance columnar storage database in vanilla JavaScript 
with 5–10× compression using dictionary encoding and RLE. 
Implemented a SQL parser and execution engine with predicate 
pushdown and late materialization for O(n) scans. Added real-time benchmarking 
and Canvas-based visualizations for performance comparison."
              ghLink="https://github.com/AKDev32/Column_Store_Project"
              demoLink="https://column-storage.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CodeSnap}
              isBlog={false}
              title="CodeSnap"
              description="Built a web-based tool that converts code snippets into visually appealing images for easy sharing. Supports customizable themes, fonts, and backgrounds with instant preview and export."
              ghLink="https://github.com/AKDev32/Code_To_ImageConverter"
              demoLink="https://codetoimagecreater.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pathfinder}
              isBlog={false}
              title="Pathfinding Algorithm Visualizer "
              description="Built an interactive algorithm visualization tool using React and Tailwind CSS, demonstrating Dĳkstra’s and A* algorithms with real-time animations.
                           Implemented a grid-based graph system with dynamic wall placement and draggable start/end nodes, enabling intuitive exploration of shortest-path behavior.
                           Improved learning experience and engagement by visualizing step-by-step algorithm execution and traversal paths."
              ghLink="https://github.com/AKDev32/data-visualizer-dashboard"
              demoLink="http://pathfinderalgo-orcin.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
