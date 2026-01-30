import { Row } from "react-bootstrap";

function LeetCode() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4">
        Days I <strong className="purple">LeetCode</strong>
      </h1>

      <img
  src="https://leetcard.jacoblin.cool/amankumar_cs?ext=heatmap"
  alt="LeetCode Graph"
/>

    </Row>
  );
}

export default LeetCode;
