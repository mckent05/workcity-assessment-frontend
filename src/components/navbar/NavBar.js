import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleSignOut } from "../../store/sessions/thunkCreators";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = async () => {
    const result = await dispatch(handleSignOut());
    if (handleSignOut.fulfilled.match(result)) {
      navigate("/login");
    } else {
      console.error(result.payload);
    }
  };

  return (
    <nav
      className="d-flex justify-content-between align-items-center w-100 p-3 bg-white"
      style={{
        boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
      }}
    >
      <h1>Customer Support Portal</h1>
      {/* <h2>
        Logged in: {user.role === "agent" ? "Agent - " : "User - "}
        <span>{user.email ? user.email : ""}</span>
      </h2> */}
      <button
        className="btn text-white"
        onClick={signOut}
        style={{
          backgroundColor: "#f9a109",
          borderRadius: "0.75rem",
          fontSize: "16px",
          fontWeight: 700,
          fontFamily: "QuickSand, sans-serif",
          transform: "translateX(-50%)",
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;