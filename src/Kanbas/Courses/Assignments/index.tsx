import React from "react";
import ModulesControls from "../Modules/ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaBook } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import PercentageButton from "./PercentageButton";
import AssignmentControls from "./AssignmentControls";
import { FaChevronDown } from "react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  notAvailable?: string;
  due?: string;
}

export default function Assignments() {
  const { cid } = useParams();
  const assignments: Assignment[] = db.assignments || [];

  // Debugging output
  console.log("Current Course ID (cid):", cid);
  console.log("Assignments:", assignments);

  return (
    <div>
      <AssignmentControls />
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
              <PercentageButton />
              <FaPlus className="me-3" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          {/* Lesson List */}
          <ul className="wd-lessons list-group rounded-0">
            {assignments.map((assignment) => (
                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                  <div className="d-flex align-items-start justify-content-between">
                    {/* Icon and Title */}
                    <div className="d-flex align-items-center me-3">
                      <BsGripVertical className="me-2 fs-3" />
                      <FaBook className="me-2 text-success fs-4" />
                      <div>
                        <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                          <div className="fw-bold">{assignment.title}</div>
                        </a>
                        <div className="text-muted small mt-1">
                          <span>
                            <span style={{ color:  "#B22222"  }}>Multiple Modules</span> |
                            <strong>Not available until</strong> {assignment.notAvailable} |
                            <strong>Due</strong> {assignment.due} | 100 pts
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
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
