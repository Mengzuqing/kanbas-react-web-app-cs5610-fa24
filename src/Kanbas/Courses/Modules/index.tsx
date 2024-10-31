import React from "react";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules || [];


  console.log("Current Course ID (cid):", cid);
  console.log("Modules:", modules);

  // Filter module and carry out detailed debugging output
  const filteredModules = modules.filter((module) => {
    console.log("Filtering module:", module); 
    console.log("Course ID from module:", module.course, "Current CID:", cid);
    return String(module.course) === String(cid);
  });

  console.log("Filtered Modules:", filteredModules);

  return (
    <div>
      <ModulesControls />
      <br /><br /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {filteredModules.map((module) => (
          <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
              <BsGripVertical className="me-2 fs-3" />
              {module.name} {/* 'Introduction to Rocket Propulsion' */}

              <div className="d-flex align-items-center ms-auto">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginTop: "0.2px" }}>
                    <GreenCheckmark />
                  </div>
                  <FaPlus className="me-2" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </div>

            {/* List of rendering course names */}
            {module.lessons && module.lessons.length > 0 && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson) => (
                  <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name} {/* The name of each course is rendered here */}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
