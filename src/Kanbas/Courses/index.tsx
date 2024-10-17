import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table"; // Ensure PeopleTable component is imported
import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../Database";

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses" className="container-fluid mt-3">
      {/* Course Title with Icon */}
      <h2 className="text-danger d-flex align-items-center">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
       
        {course && course.name} &gt; {pathname.split("/")[4]}


      </h2>
      <hr />
      
      {/* Main Container */}
      <div className="row">
        {/* Navigation Sidebar - Visible in larger screens */}
        <div className="col-12 col-md-3 d-none d-md-block">
          <CoursesNavigation />
        </div>

        {/* Main Content Area */}
        <div className="col-12 col-md-9">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
