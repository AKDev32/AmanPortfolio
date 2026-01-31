import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="AKDev32"
        blockSize={30}
        blockMargin={10}
        color="#c084f5"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;

// import { Row } from "react-bootstrap";

// function Github() {
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
//   src="https://github-readme-stats.vercel.app/api?username=AKDev32\&show_icons=true\&hide_title=true\&theme=default"
//   alt="GitHub Heatmap Dark"
//   className="heatmap-image"
// />

//     </Row>
//   );
// }

// export default Github;

// // import React from "react";
// // import { Row } from "react-bootstrap";
// // import GitHubCalendar from "react-github-calendar";

// // function Github() {
// //   return (
// //     <Row className="stats-container">
// //       <h1 className="project-heading">
// //         Days I <strong className="purple">Code</strong>
// //       </h1>

// //       <div className="heatmap-wrapper">
// //         <GitHubCalendar
// //           username="AKDev32"
// //           blockSize={15}
// //           blockMargin={5}
// //           color="#c084f5"
// //           fontSize={16}
// //           // This ensures the library uses your CSS width
// //           style={{ color: "white" }}
// //         />
// //       </div>
// //     </Row>
// //   );
// // }

// // export default Github;
