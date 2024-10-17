import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import assignments_data from "../../Database/assignments_data.json";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  notAvailable?: string;
  due?: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const [assignment, setAssignment] = useState<Assignment | undefined>(undefined);

  useEffect(() => {
    console.log("Assignments in Database:", assignments_data); // 输出所有作业，检查数据结构是否正确
    console.log("Current Assignment ID (aid):", aid); // 输出当前作业 ID
    const selectedAssignment = assignments_data.find((a) => a._id === aid);
    console.log("Selected Assignment:", selectedAssignment); // 调试输出
    setAssignment(selectedAssignment);
  }, [aid]);

  if (!assignment) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Assignment Name */}
      <label htmlFor="wd-name">
        <strong>Assignment Name</strong>
      </label>
      <br />
      <input id="wd-name" value={assignment.title} style={{ width: "100%", marginBottom: "20px" }} readOnly />

      {/* Description */}
      <label htmlFor="wd-description">
        <strong>Description</strong>
      </label>
      <div
        id="wd-description"
        style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px", width: "100%", marginBottom: "20px" }}
      >
        {assignment.description ? assignment.description : "No description provided."}
      </div>

      <table style={{ width: "100%" }}>
        <tbody>
          {/* Points */}
          <tr>
            <td align="right" valign="top" style={{ width: "30%", paddingRight: "10px" }}>
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={assignment.points || 100} style={{ width: "100%" }} />
            </td>
          </tr>

          {/* Assignment Group */}
          <tr>
            <td align="right" valign="top" style={{ paddingRight: "10px", paddingTop: "20px" }}>
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td style={{ paddingTop: "20px" }}>
              <select id="wd-group" style={{ width: "100%" }} defaultValue="assignments">
                <option value="assignments">Assignments</option>
                <option value="quizzes">Quizzes</option>
                <option value="projects">Projects</option>
              </select>
            </td>
          </tr>

          {/* Display Grade As */}
          <tr>
            <td align="right" valign="top" style={{ paddingRight: "10px", paddingTop: "20px" }}>
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td style={{ paddingTop: "20px" }}>
              <select id="wd-display-grade-as" style={{ width: "100%" }} defaultValue="percentage">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
                <option value="letter">Letter Grade</option>
              </select>
            </td>
          </tr>

          {/* Submission Type */}
          <tr>
            <td align="right" valign="top" style={{ paddingRight: "10px", paddingTop: "20px" }}>
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td style={{ paddingTop: "20px" }}>
              <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px", width: "100%" }}>
                <select id="wd-submission-type" style={{ width: "100%", marginBottom: "20px" }} defaultValue="online">
                  <option value="online">Online</option>
                  <option value="onPaper">On Paper</option>
                  <option value="externalTool">External Tool</option>
                </select>
                {/* Online Entry Options */}
                <label style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>Online Entry Options</label>
                <div>
                  <input type="checkbox" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry" style={{ marginLeft: "5px" }}>Text Entry</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-website-url" />
                  <label htmlFor="wd-website-url" style={{ marginLeft: "5px" }}>Website URL</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-media-recordings" />
                  <label htmlFor="wd-media-recordings" style={{ marginLeft: "5px" }}>Media Recordings</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-student-annotation" />
                  <label htmlFor="wd-student-annotation" style={{ marginLeft: "5px" }}>Student Annotation</label>
                </div>
                <div>
                  <input type="checkbox" id="wd-file-upload" />
                  <label htmlFor="wd-file-upload" style={{ marginLeft: "5px" }}>File Upload</label>
                </div>
              </div>
            </td>
          </tr>

          {/* Assign To */}
          <tr>
            <td align="right" valign="top" style={{ paddingRight: "10px", paddingTop: "20px" }}>
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td style={{ paddingTop: "20px" }}>
              <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px", width: "100%" }}>
                <label htmlFor="wd-assign-to" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>Assign to</label>
                <input id="wd-assign-to" type="text" value="Everyone" style={{ width: "100%", marginBottom: "20px" }} readOnly />

                <label htmlFor="wd-due-date" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>Due</label>
                <input id="wd-due-date" type="datetime-local" defaultValue={assignment.due || ""} style={{ width: "100%", marginBottom: "20px" }} />

                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ flex: "1" }}>
                    <label htmlFor="wd-available-from" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>Available from</label>
                    <input id="wd-available-from" type="datetime-local" defaultValue={assignment.notAvailable || ""} style={{ width: "100%" }} />
                  </div>
                  <div style={{ flex: "1" }}>
                    <label htmlFor="wd-available-until" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>Until</label>
                    <input id="wd-available-until" type="datetime-local" defaultValue="2024-05-20T00:00" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
            </td>
          </tr>

          {/* Cancel and Save Buttons */}
          <tr>
            <td></td>
            <td style={{ textAlign: "right", paddingTop: "20px" }}>
              <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                <button type="button" style={{ marginRight: "10px" }}>Cancel</button>
              </Link>
              <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                <button type="submit">Save</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

