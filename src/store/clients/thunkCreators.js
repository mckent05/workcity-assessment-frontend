import {
  handleLoading,
  getClients,
  getClient,
  updateClient,
  addClient
} from "./clientSlice";
import { getToken, baseURL } from "../utils/sessions";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchClients = createAsyncThunk(
  "get/clients",
  async (_, { dispatch, rejectWithValue }) => {
    const token = getToken();
    dispatch(handleLoading(true));

    try {
      const response = await fetch(`${baseURL}/clients`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      const data = await response.json();

      dispatch(getClients(data.data));
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
      dispatch(handleLoading(false));
    }
  }
);

export const fetchClient = createAsyncThunk(
  "get/client/id",
  async (id, { dispatch, rejectWithValue }) => {
    const token = getToken();
    dispatch(handleLoading(true));

    try {
      const response = await fetch(`${baseURL}/clients/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      const data = await response.json();

      if (data.errors) {
        throw new Error(data.error);
      }

      dispatch(getClient(data.data));
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
      dispatch(handleLoading(false));
    }
  }
);

export const createClient = createAsyncThunk(
  "new/client",
  async (newClient, { dispatch, rejectWithValue }) => {
    const { name, email, phone } = newClient;
    const token = getToken();

    // dispatch(handleLoading(true));

    try {
      const response = await fetch(`${baseURL}/clients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({name, email, phone}),
      });

      const data = await response.json();

      if (data.errors) {
        const error = data.error;
        toast.error(error);
        throw new Error(error);
      }

      dispatch(addClient(data.data));
      toast.success("New Client Created!");
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postTicketComment = createAsyncThunk(
  "ticket/comment",
  async (comment, { dispatch, rejectWithValue }) => {
    const { ticketId, content } = comment;
    const token = getToken();

    try {
      const response = await fetch(`${baseURL}/graphql`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          query: commentMutation,
          variables: { input: { ticketId, content } },
        }),
      });

      const data = await response.json();

      if (data.errors) {
        const error = data.errors[0].message;
        toast.error(error);
        throw new Error(error);
      }

      dispatch(addComment(data.data.addComment));
      toast.success("Comment Added!");
      return data.data.addComment;
    } catch (error) {
      return rejectWithValue(error.message);
    }
    // finally {
    //   dispatch(handleLoading(false));
    // }
  }
);

export const updateClient = createAsyncThunk(
  "update/client",
  async (clientUpdate, { dispatch, rejectWithValue }) => {
    const { clientId, name, email, status } = clientUpdate;
    const token = getToken();

    dispatch(handleLoading(true));

    try {
      const response = await fetch(`${baseURL}/clients/${clientId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({name, email, status}),
      });

      const data = await response.json();

      if (data.error) {
        const error = data.error;
        toast.error(error);
        throw new Error(error);
      }

      dispatch(updateClient(data.data));
      toast.success("Client Updated!");
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    } finally {
      dispatch(handleLoading(false));
    }
  }
);
