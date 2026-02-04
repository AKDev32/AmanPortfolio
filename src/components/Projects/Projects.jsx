import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Pathfinder from "../../Assets/Projects/Path.png";
import CodeSnap from "../../Assets/Projects/CodeSnap.png";
import ColumnStore from "../../Assets/Projects/Column.png";
import LeetLogic from "../../Assets/Projects/LeetLogic.png";
import Rate from "../../Assets/Projects/Ratleimitor.png";
import web from "../../Assets/Projects/webCrawler.png";

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
              imgPath={ColumnStore}
              isBlog={false}
              title="Column Store Database Engine"
              description="
              Engineered a high-performance columnar storage engine from scratch, achieving a 5–10× reduction in storage size by implementing dictionary and run-length encoding (RLE).
              Optimized analytical query execution to $O(n)$ for filtered scans by implementing predicate pushdown and late materialization techniques.
              Developed a custom SQL parser supporting aggregations (GROUP BY, SUM) to handle complex datasets directly in the browser."
              ghLink="https://github.com/AKDev32/Column_Store_Project"
              demoLink="https://column-storage.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rate}
              isBlog={false}
              title="RateLimiter Pro | Distributed Rate Limiting System"
              description="Designed a production-grade rate limiting system implementing Token Bucket and Sliding Window algorithms to prevent API abuse and manage traffic bursts.
                          Ensured atomic request counting across distributed servers by integrating Redis (INCR/EXPIRE), eliminating race conditions during high-traffic spikes.
                          Built a traffic simulator to benchmark system performance, monitoring latency and success rates under simulated spiky workloads."
              ghLink="https://github.com/AKDev32/RateLimiterPro"
              demoLink="https://rate-limiter-pro.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LeetLogic}
              isBlog={false}
              title="LeetLogic"
              description="Developed a centralized DSA practice platform serving 50+ company-specific interview questions, providing a free alternative to premium
                          resources for students.
                          Automated data retrieval from interview APIs to provide real-time updates on frequent coding patterns used by top-tier tech firms."
              ghLink="https://github.com/AKDev32/LeetLogic"
              demoLink="https://leet-logic.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="WebCrawler | Browser-Based Tool"
              description="Created a multi-threaded web crawler that operates entirely without backend infrastructure, ensuring robots.txt compliance and URL filtering.
                          Implemented persistent state management using IndexedDB, allowing users to resume interrupted crawls and export data in JSON/CSV
                          formats."
              ghLink="https://github.com/AKDev32/Web-Crawler"
              demoLink="https://web-crawler-js.vercel.app/"
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
