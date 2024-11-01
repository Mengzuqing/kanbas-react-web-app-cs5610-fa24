import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"; // Importing the Plus icon
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";



export default function ModuleControlButtons(
  { moduleId, deleteModule ,editModule}: 
  { moduleId: string; deleteModule: (moduleId: string) => void; 
    editModule: (moduleId: string) => void 
  } ) {

  return (
    <div className="float-end">
      <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />

      {/* Green Checkmark Icon */}
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
      {/* <GreenCheckmark />
      Ellipsis Vertical Icon for more options 
      <IoEllipsisVertical className="fs-4" />*/}
    </div>
  );
}
