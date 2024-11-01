import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

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

const initialState = {
  assignments: assignments || [] as Assignment[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }: PayloadAction<Assignment>) => {
      const newAssignment: Assignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        description: assignment.description || "",
        points: assignment.points || 100,
        due: assignment.due || "",
        notAvailable: assignment.notAvailable || "",
        availableUntil: assignment.availableUntil || ""
      };
      state.assignments.push(newAssignment);
    },
    updateAssignment: (state, { payload: updatedAssignment }: PayloadAction<Assignment>) => {
      // 使用 findIndex 来找到需要更新的作业
      const index = state.assignments.findIndex((a) => a._id === updatedAssignment._id);
      if (index !== -1) {
        // 明确地更新找到的作业的各个属性
        state.assignments[index] = { ...state.assignments[index], ...updatedAssignment };
      }
    },
    deleteAssignment: (state, { payload: assignmentId }: PayloadAction<string>) => {
      // 使用 filter 删除指定作业
      state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
