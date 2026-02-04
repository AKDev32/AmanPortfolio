import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

// Put your PDF in the public folder
const pdfFile = "/Aman_Kumar_Resume.pdf";

function ResumeNew() {
  return (
    <Container fluid className="resume-section position-relative">
      {/* Particle background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <Particle />
      </div>

      {/* Content above particles */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Download Button */}
        <Row className="justify-content-center mb-4">
          <Button
            variant="primary"
            href={pdfFile}
            target="_blank"
            style={{ maxWidth: "250px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <AiOutlineDownload /> &nbsp; Download Resume
          </Button>
        </Row>

        {/* PDF Viewer (always visible) */}
        <Row className="justify-content-center">
          <iframe
            src={pdfFile}
            title="Resume"
            width="80%"
            height="1000px"
            style={{ border: "1px solid #ccc", borderRadius: "5px" }}
          />
        </Row>
      </div>
    </Container>
  );
}

export default ResumeNew;
