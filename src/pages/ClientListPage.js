import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import Header from "../components/TicketList/Header";
// import TicketsTable from "../components/TicketList/TicketsTable";
// import { Fab, Box, Container, Button } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import { downloadClosedTickets } from "../store/tickets/thunkCreators";

const ClientListPage = () => {
  // const { tickets } = useSelector((state) => state.tickets);
  // const { user } = useSelector((state) => state.user);

  // const navigate = useNavigate();

  // const dispatch = useDispatch()

  // const handleDownloadCSV = async () => {
  //   const result = await dispatch(downloadClosedTickets());
  
  //   if (downloadClosedTickets.fulfilled.match(result)) {
  //     const csvContent = result.payload;
  //     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  //     const url = URL.createObjectURL(blob);
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.setAttribute("download", "closed_tickets.csv");
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     URL.revokeObjectURL(url);
  //   } else {
  //     console.error("CSV download failed:", result.payload || result.error.message);
  //   }
  // };

  return (
    <div>
      ClientListPage
    </div>
    // <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    //   <Header role={user.role} />
    //   <Box
    //     display="flex"
    //     justifyContent="space-between"
    //     alignItems="center"
    //     mt={2}
    //     mb={4}
    //   >
    //     {user.role === "agent" && (
    //       <Button
    //         variant="contained"
    //         onClick={handleDownloadCSV}
    //         sx={{
    //           backgroundColor: "#f9a109",
    //           "&:hover": {
    //             backgroundColor: "#e78f00",
    //           },
    //           textTransform: "none",
    //           fontWeight: 500,
    //           margin: "auto"
    //         }}
    //       >
    //         Export Closed Tickets
    //       </Button>
    //     )}
    //   </Box>
    //   <Box
    //     display="flex"
    //     justifyContent="center"
    //     alignItems="center"
    //     mt={5}
    //     mb={5}
    //   >
    //     <TicketsTable tickets={tickets} role={user.role} />
    //   </Box>
    //   {user.role === "customer" && (
    //     <Fab
    //       color="primary"
    //       aria-label="add"
    //       onClick={() => navigate("/new-ticket")}
    //       sx={{
    //         position: "fixed",
    //         bottom: 32,
    //         right: 32,
    //         backgroundColor: "#f9a109",
    //         "&:hover": {
    //           backgroundColor: "#e78f00",
    //         },
    //       }}
    //     >
    //       <AddIcon />
    //     </Fab>
    //   )}
    // </Container>
  );
};

export default ClientListPage;
