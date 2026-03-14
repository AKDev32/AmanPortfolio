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
import Fake from "../../Assets/Projects/Fake.png";
import News from "../../Assets/Projects/News.png";

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
              imgPath={News}
              isBlog={false}
              title="Fake News Detection System"
              description="
              Built an NLP pipeline for fake news classification using Logistic Regression and TF-IDF vectorization on textual news datasets.
              Designed preprocessing pipeline including tokenization, normalization, and feature extraction for robust classification.
              Implemented model deployment with Streamlit enabling real-time prediction and interpretability through confidence scores."
              ghLink="https://github.com/AKDev32/FakeNewsDetection"
              demoLink="https://amankumar-fake-news-detector.streamlit.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fake}
              isBlog={false}
              title="Credit Card Fraud Detection using Machine Learning"
              description="
              Implemented supervised ML models (Logistic Regression, Decision Tree, KNN) on the Kaggle credit card fraud dataset.
              Addressed severe class imbalance (0.17\% fraud cases) using SMOTE oversampling to improve recall for fraud detection.
              Conducted exploratory data analysis including ROC-AUC evaluation, confusion matrices, and correlation analysis."
              ghLink="https://github.com/AKDev32/CreditCardFraudDetection"
              demoLink="https://amankumar-credit-card-fraud-detector.streamlit.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ColumnStore}
              isBlog={false}
              title="Column Store Database Engine"
              description="
              Architected browser-native columnar database engine optimized for analytical workloads.
              Reduced storage footprint by 5–10 times using dictionary encoding and run-length encoding (RLE).
              Improved filtered query execution speed by ~60\% via predicate pushdown and late materialization.
              Implemented custom SQL parser supporting GROUP BY and SUM aggregations across large datasets (10k+ rows tested)."
              ghLink="https://github.com/AKDev32/Column_Store_Project"
              demoLink="https://column-storage.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rate}
              isBlog={false}
              title="RateLimiter Pro | Distributed Rate Limiting System"
              description="Designed scalable rate limiting system handling simulated traffic of 5,000+ requests/minute.
                          Ensured atomic consistency using Redis-style INCR/EXPIRE operations under concurrent load.
                          Reduced request bursts by 80% during stress testing with Token Bucket & Sliding Window algorithms."
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
