
import { Routes, Route, Navigate } from "react-router";
import React from 'react'
import "./styles.css";
import Account from "./Account ";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import Home from "./Courses/Home";
import Modules from "./Courses/Modules";
import Assignments from "./Courses/Assignments";
import AssignmentEditor from "./Courses/Assignments/Editor";
import PeopleTable from "./Courses/People/Table";



export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <h1>Kanbas</h1>
   
               <KanbasNavigation />
               <div className="wd-main-content-offset p-3">
                  <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Courses/:cid/*" element={<Courses />} />
                    </Routes>

                   
                </div>

                
    </div>
);}

