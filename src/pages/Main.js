import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { fetchTickets } from "../store/tickets/thunkCreators";
// import { fetchUserProfile } from "../store/user/thunkCreators";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

const Main = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTickets());
  //   dispatch(fetchUserProfile());
  // }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Main;
