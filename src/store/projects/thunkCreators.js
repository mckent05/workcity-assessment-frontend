import {
  handleLoading,
  getProjects,
  getProject,
  updateProject,
  addProject,
  getProjectsByClient,
} from "./projectSlice";
import { getToken, baseURL } from "../utils/sessions";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchProjects = createAsyncThunk(
  "get/projects",
  async (_, { dispatch, rejectWithValue }) => {
    const token = getToken();
    dispatch(handleLoading(true));

    try {
      const response = await fetch(`${baseURL}/projects`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      dispatch(getProjects(data.data));
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
      dispatch(handleLoading(false));
    }
  }
);

export const fetchProjectsByClient = createAsyncThunk(
  "get/projectsByClient",
  async (clientId, { dispatch, rejectWithValue }) => {
    const token = getToken();
    dispatch(handleLoading(true));

    try {
      const response = await fetch(
        `${baseURL}/projects/by-client/${clientId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      dispatch(getProjectsByClient(data.data));
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
      dispatch(handleLoading(false));
    }
  }
);

export const fetchProject = createAsyncThunk(
  "get/Project/id",
  async (id, { dispatch, rejectWithValue }) => {
    const token = getToken();
    dispatch(handleLoading(true));

    try {
      const response = await fetch(`${baseURL}/projects/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.errors) {
        throw new Error(data.error);
      }

      dispatch(getProject(data.data));
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
      dispatch(handleLoading(false));
    }
  }
);

export const createProject = createAsyncThunk(
  "new/Project",
  async (newProject, { dispatch, rejectWithValue }) => {
    const token = getToken();

    try {
      const response = await fetch(`${baseURL}/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProject),
      });

      const data = await response.json();

      if (data.errors) {
        const error = data.error;
        toast.error(error);
        throw new Error(error);
      }

      dispatch(addProject(data.data));
      toast.success("New Project Created!");
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProjectAPI = createAsyncThunk(
  "update/project",
  async (projectUpdate, { dispatch, rejectWithValue }) => {
    const { projectId, title, description, status } = projectUpdate;
    const token = getToken();

    dispatch(handleLoading(true));

    try {
      const response = await fetch(`${baseURL}/projects/${projectId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description, status }),
      });

      const data = await response.json();

      if (data.error) {
        const error = data.error;
        toast.error(error);
        throw new Error(error);
      }

      dispatch(updateProject(data.data));
      toast.success("Project Updated!");
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
      dispatch(handleLoading(false));
    }
  }
);
