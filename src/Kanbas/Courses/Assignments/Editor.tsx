import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  notAvailable: string;
  due: string;
  availableUntil: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments) || [];

  // 初始化作业的状态，确保所有字段都有默认值
  const [assignment, setAssignment] = useState<Assignment>({
    _id: "",
    title: "",
    course: cid || "",
    description: "",
    points: 100,
    notAvailable: "",
    due: "",
    availableUntil: ""
  });

  useEffect(() => {
    if (aid && aid !== "new") {
      // 查找现有作业并设置到状态
      const existingAssignment = assignments.find((a: Assignment) => a._id === aid);
      if (existingAssignment) {
        setAssignment(existingAssignment);
      }
    }
  }, [aid, assignments]);

  // 处理输入变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setAssignment({ ...assignment, [id]: value });
  };

  // 保存作业
  const handleSave = () => {
    if (aid && aid !== "new") {
      dispatch(updateAssignment(assignment));  // 更新作业
    } else {
      dispatch(addAssignment({ ...assignment, _id: new Date().getTime().toString() }));  // 添加新作业
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);  // 保存后返回到作业列表
  };

  // 取消操作
  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);  // 取消后返回到作业列表
  };

  return (
    <div>
      <label htmlFor="title">
        <strong>Assignment Name</strong>
      </label>
      <input
        id="title"
        value={assignment.title}
        onChange={handleInputChange}
        style={{ width: "100%", marginBottom: "20px" }}
      />

      <label htmlFor="description">
        <strong>Description</strong>
      </label>
      <textarea
        id="description"
        value={assignment.description}
        onChange={handleInputChange}
        style={{ width: "100%", height: "100px", marginBottom: "20px" }}
      />

      <label htmlFor="points">
        <strong>Points</strong>
      </label>
      <input
        id="points"
        type="number"
        value={assignment.points}
        onChange={handleInputChange}
        style={{ width: "100%", marginBottom: "20px" }}
      />

      <label htmlFor="due">
        <strong>Due Date</strong>
      </label>
      <input
        id="due"
        type="datetime-local"
        value={assignment.due}
        onChange={handleInputChange}
        style={{ width: "100%", marginBottom: "20px" }}
      />

      <label htmlFor="notAvailable">
        <strong>Available From</strong>
      </label>
      <input
        id="notAvailable"
        type="datetime-local"
        value={assignment.notAvailable}
        onChange={handleInputChange}
        style={{ width: "100%", marginBottom: "20px" }}
      />

      <label htmlFor="availableUntil">
        <strong>Available Until</strong>
      </label>
      <input
        id="availableUntil"
        type="datetime-local"
        value={assignment.availableUntil}
        onChange={handleInputChange}
        style={{ width: "100%", marginBottom: "20px" }}
      />

      <div style={{ textAlign: "right", paddingTop: "20px" }}>
        <button type="button" onClick={handleCancel} style={{ marginRight: "10px" }}>
          Cancel
        </button>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
