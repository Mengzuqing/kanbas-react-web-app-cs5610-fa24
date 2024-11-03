import React, { useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaBook, FaTrash, FaEdit, FaSave } from "react-icons/fa";
import AssignmentButton from "./AssignmentButton";
import AssignmentControls from "./AssignmentControls";
import { FaChevronDown } from "react-icons/fa";
import { useParams, Link } from "react-router-dom"; // 引入 Link
import * as db from "../../Database";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  notAvailable?: string;
  due?: string;
  points?: number;
}

export default function Assignments() {
  const { cid } = useParams();
  const [assignments, setAssignments] = useState<Assignment[]>(db.assignments || []);
  const [assignmentName, setAssignmentName] = useState("");
  const [notAvailable, setNotAvailable] = useState("");
  const [due, setDue] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedAssignment, setEditedAssignment] = useState<Assignment | null>(null);

  const addAssignment = () => {
    if (assignmentName.trim() === "") {
      alert("Assignment name cannot be empty");
      return;
    }
    const newAssignment: Assignment = {
      _id: new Date().getTime().toString(),
      title: assignmentName,
      course: cid as string,
      notAvailable: notAvailable,
      due: due,
      points: 0,
    };
    setAssignments([...assignments, newAssignment]);
    setAssignmentName("");
    setNotAvailable("");
    setDue("");
  };

  const deleteAssignment = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      setAssignments(assignments.filter((assignment) => assignment._id !== assignmentId));
    }
  };

  const startEditing = (assignment: Assignment) => {
    setEditingId(assignment._id);
    setEditedAssignment({ ...assignment });
  };

  const handleSave = () => {
    if (editedAssignment) {
      setAssignments(assignments.map((assignment) =>
        assignment._id === editedAssignment._id ? editedAssignment : assignment
      ));
      setEditingId(null);
      setEditedAssignment(null);
    }
  };

  return (
    <div>
      <AssignmentControls 
        assignmentName={assignmentName} 
        setAssignmentName={setAssignmentName} 
        addAssignment={addAssignment} 
      />
      <br /><br />
      <ul id="wd-assignment" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaChevronDown className="me-2 fs-5" />
              <span>ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <AssignmentButton />
              <FaPlus style={{ marginLeft: "16px" }} className="me-3" onClick={addAssignment} />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          {/* 作业列表 */}
          <ul className="wd-lessons list-group rounded-0">
            {assignments.map((assignment) => (
              <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center me-3">
                    <BsGripVertical className="me-2 fs-3" />
                    <FaBook className="me-2 text-success fs-4" />
                    <div>
                      {editingId === assignment._id ? (
                        <input
                          type="text"
                          value={editedAssignment?.title || ""}
                          onChange={(e) =>
                            setEditedAssignment({ ...editedAssignment!, title: e.target.value })
                          }
                          className="fw-bold"
                        />
                      ) : (
                        <Link
                          to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                          className="fw-bold wd-assignment-link"
                        >
                          {assignment.title}
                        </Link>
                      )}
                      <div className="text-muted small mt-1">
                        <span>
                          <span style={{ color: "#B22222" }}>Multiple Modules</span> |
                          <strong> Not available until</strong>{" "}
                          {editingId === assignment._id ? (
                            <input
                              type="datetime-local"
                              value={editedAssignment?.notAvailable || ""}
                              onChange={(e) =>
                                setEditedAssignment({
                                  ...editedAssignment!,
                                  notAvailable: e.target.value,
                                })
                              }
                            />
                          ) : (
                            assignment.notAvailable
                          )}
                          {" | "}
                          <strong> Due</strong>{" "}
                          {editingId === assignment._id ? (
                            <input
                              type="datetime-local"
                              value={editedAssignment?.due || ""}
                              onChange={(e) =>
                                setEditedAssignment({ ...editedAssignment!, due: e.target.value })
                              }
                            />
                          ) : (
                            assignment.due
                          )}
                          {" | "}
                          {editingId === assignment._id ? (
                            <input
                              type="number"
                              value={editedAssignment?.points ?? 100}
                              onChange={(e) =>
                                setEditedAssignment({
                                  ...editedAssignment!,
                                  points: Number(e.target.value),
                                })
                              }
                              style={{ width: "50px" }}
                            />
                          ) : (
                            `${assignment.points || 100} pts`
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    {editingId === assignment._id ? (
                      <FaSave className="text-success me-2" onClick={handleSave} />
                    ) : (
                      <FaEdit className="text-primary me-2" onClick={() => startEditing(assignment)} />
                    )}
                    <FaTrash className="text-danger me-2" onClick={() => deleteAssignment(assignment._id)} />
                    <GreenCheckmark />
                    <IoEllipsisVertical className="ms-2 fs-5" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

