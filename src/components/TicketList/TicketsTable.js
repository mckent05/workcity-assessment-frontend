import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const TicketsTable = ({ tickets, role }) => {
  const navigate = useNavigate();

  const handleRowClick = (ticketId) => {
    navigate(`/tickets/${ticketId}`);
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1000, minHeight: 300 }}>
      {tickets.length > 0 ? (
        <Table sx={{ minWidth: 650 }} aria-label="tickets table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Ticket ID</strong>
              </TableCell>
              <TableCell>
                <strong>Title</strong>
              </TableCell>
              <TableCell>
                <strong>Complaint</strong>
              </TableCell>
              {role === "agent" && (
                <TableCell>
                  <strong>Ticket Owner</strong>
                </TableCell>
              )}
              <TableCell>
                <strong>Assigned Agent</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow
                key={ticket.id}
                hover
                sx={{ cursor: "pointer" }}
                onClick={() => handleRowClick(ticket.id)}
              >
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell
                  sx={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    maxWidth: "150px",
                    width: "35%",
                  }}
                >
                  {ticket.complaint}
                </TableCell>
                {role === "agent" && (
                  <TableCell>{ticket.customer.username}</TableCell>
                )}
                <TableCell>
                  {ticket.agent ? ticket.agent.username : "None"}
                </TableCell>
                <TableCell>
                  {ticket.status === "in_progress"
                    ? "In Progress"
                    : ticket.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="300px"
          textAlign="center"
        >
          <Typography variant="h6" color="text.secondary">
            {role === "agent"
              ? "No open tickets currently available"
              : "You have no tickets, click on the add button to add a ticket"}
          </Typography>
        </Box>
      )}
    </TableContainer>
  );
};

export default TicketsTable;
