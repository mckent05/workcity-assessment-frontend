import React from "react";
import { Typography, Box } from "@mui/material";

const Header = ({ role }) => {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        {role === "agent" ? "Agent" : "Customer"} Dashboard
      </Typography>
      <Typography variant="h6" gutterBottom color="text.secondary">
        {role === "agent"
          ? "All Available Support Tickets"
          : "Your support Tickets"}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Click on a row to view the details of the support ticket.
      </Typography>
    </Box>
  );
};

export default Header;
