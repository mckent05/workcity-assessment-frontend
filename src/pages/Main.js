import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchClients } from "../store/clients/thunkCreators";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Main;
