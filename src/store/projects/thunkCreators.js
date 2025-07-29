import {
  handleLoading,
  userSignUp,
  userSignIn,
  userSignOut,
} from "./sessionSlice";
import { clearSession, getToken, baseURL } from "../utils/sessions";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const handleSignIn = createAsyncThunk(
  "user/login",
  async (user, { dispatch }) => {
    const { email, password } = user;
    const loginDetails = { user: { email, password } };
    dispatch(handleLoading(true));
    const postDetails = await fetch(`${baseURL}/users/sign_in`, {
      method: "POST",
      body: JSON.stringify(loginDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await postDetails.json();
    const token = postDetails.headers.get("Authorization");
    if (token) {
      localStorage.setItem("user-token", JSON.stringify(token));
      localStorage.setItem("session", true);
      dispatch(userSignIn());
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
    dispatch(handleLoading(false));
  }
);

export const handleSignUp = createAsyncThunk(
  "user/register",
  async (user, { dispatch }) => {
    const { username, password, email, firstName, lastName, role } = user;
    const registerDetails = {
      user: {
        username,
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        role: role,
      },
    };
    dispatch(handleLoading(true));
    const postDetails = await fetch(`${baseURL}/users`, {
      method: "POST",
      body: JSON.stringify(registerDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const serverResponse = await postDetails.json();
    if (serverResponse.status === 200) {
      dispatch(userSignUp(true));
      toast.success(serverResponse.message);
    } else {
      dispatch(userSignUp(false));
      toast.error(serverResponse.message);
    }
    dispatch(handleLoading(false));
  }
);

export const handleSignOut = createAsyncThunk(
  "user/sign_out",
  async (_, { dispatch }) => {
    const userToken = getToken();
    dispatch(handleLoading(true));
    const details = await fetch(`${baseURL}/users/sign_out`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: userToken,
      },
    });
    const response = await details.json();
    dispatch(userSignOut());
    clearSession();
    toast.success(response.message);
    dispatch(handleLoading(false));
  }
);
