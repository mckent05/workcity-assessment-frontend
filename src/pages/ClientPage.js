import React from "react";
import { Outlet } from "react-router-dom";

const ClientPage = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ClientPage;
