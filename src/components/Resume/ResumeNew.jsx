import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfFile from "../../Assets/Soumyajit_Behera.pdf";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Assuming you pasted the worker file into the public folder as discussed
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [showResume, setShowResume] = useState(false); // State to toggle visibility

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Button Group */}
        <Row style={{ justifyContent: "center", position: "relative", gap: "10px" }}>
          {/* View Button */}
          <Button
            variant="primary"
            onClick={() => setShowResume(!showResume)}
            style={{ maxWidth: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <AiOutlineEye /> &nbsp; {showResume ? "Hide Resume" : "View Resume"}
          </Button>

          {/* Download Button */}
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            style={{ maxWidth: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <AiOutlineDownload /> &nbsp; Download CV
          </Button>
        </Row>

        {/* Conditional Rendering of the PDF */}
        {showResume && (
          <Row className="resume" style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
            <Document 
              file={pdfFile} 
              loading={<div style={{ color: "white" }}>Opening Resume...</div>}
              className="d-flex justify-content-center"
            >
              <Page 
                pageNumber={1} 
                scale={width > 786 ? 1.7 : 0.6} 
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </Row>
        )}

        {/* Optional: Bottom Button Group for better UX on long pages */}
        {showResume && (
           <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
              <Button
                variant="primary"
                href={pdfFile}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload /> &nbsp; Download CV
              </Button>
           </Row>
        )}
      </Container>
    </div>
  );
}

export default ResumeNew;