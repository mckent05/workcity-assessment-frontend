import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  projects: [],
  project: {},
  projectsByClient: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    handleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    getProjects: (state, action) => {
      state.projects = action.payload;
    },
    getProjectsByClient: (state, action) => {
      state.projectsByClient = action.payload;
    },
    getProject: (state, action) => {
      state.project = { ...action.payload };
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const updatedProject = action.payload;
      state.projects = state.projects.map((project) =>
        project._id === updatedProject._id ? { ...updatedProject } : project
      );
      state.project = updatedProject;
    },
     deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project._id !== action.payload
      );
    },
  },
});

export const {
  handleLoading,
  getProjects,
  getProject,
  addProject,
  updateProject,
  deleteProject,
  getProjectsByClient,
} = projectSlice.actions;
export default projectSlice.reducer;
