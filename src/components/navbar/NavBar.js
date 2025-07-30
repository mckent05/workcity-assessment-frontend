import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold fs-4">WorkCity Portal</span>
        <div className="d-flex">
          <button className="btn btn-warning fw-bold px-4" onClick={signOut}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
