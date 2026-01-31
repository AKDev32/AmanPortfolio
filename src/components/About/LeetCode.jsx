// import { Row } from "react-bootstrap";

// function LeetCode() {
//   return (
//     <Row
//       style={{
//         justifyContent: "center",
//         paddingBottom: "10px",
//         color: "white",
//       }}
//     >
//       <h1 className="project-heading pb-4">
//         Days I <strong className="purple">LeetCode</strong>
//       </h1>

//       <img
//   src="https://leetcard.jacoblin.cool/amankumar_cs?ext=heatmap"
//   alt="LeetCode Graph"
// />

//     </Row>
//   );
// }

// export default LeetCode;



// // import { Row } from "react-bootstrap";

// // function LeetCode() {
// //   return (
// //     <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
// //       <div className="heatmap-card">
// //         <h2 className="heatmap-title">Heatmap (Last 52 Weeks)</h2>

// //         <img
// //           src="https://leetcard.jacoblin.cool/amankumar_cs?ext=heatmap"
// //           alt="LeetCode Heatmap"
// //           className="heatmap-image"
// //         />

// //         <div className="heatmap-dates">
// //           <span>2025.02.01</span>
// //           <span>2026.01.31</span>
// //         </div>
// //       </div>
// //     </Row>
// //   );
// // }

// // export default LeetCode;



import React from "react";
import { Row } from "react-bootstrap";

function LeetCode() {
  return (
    <Row className="stats-container">
      <h1 className="project-heading">
        Days I Solved <strong className="purple">LeetCode</strong> Problems
      </h1>

      <div className="heatmap-wrapper">
        <img
          src="https://leetcard.jacoblin.cool/amankumar_cs?ext=heatmap"
          alt="LeetCode Heatmap"
          className="heatmap-image"
        />
        <div className="heatmap-dates">
          <span>2025.02.01</span>
          <span>2026.01.31</span>
        </div>
      </div>
    </Row>
  );
}

export default LeetCode;