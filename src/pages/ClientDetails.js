import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
// import { fetchTicket, closeTicket } from "../store/tickets/thunkCreators";
// import CommentBox from "../components/CommentBox";
// import CommentsSection from "../components/CommentsSection";
// import {
//   Container,
//   Typography,
//   Paper,
//   Box,
//   CircularProgress,
//   Button,
// } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const getStatusColor = (status) => {
  switch (status) {
    case "open":
      return "#d4edda";
    case "in_progress":
      return "#fff3cd";
    case "closed":
      return "#f8d7da";
    default:
      return "#f0f0f0";
  }
};

const ClientDetailsPage = () => {
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { ticket, isLoading } = useSelector((state) => state.tickets);
  // const { user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(fetchTicket(id));
  // }, [dispatch, id]);

  // const handleCloseTicket = () => {
  //   dispatch(closeTicket({ ticketId: id, status: "closed" }));
  // };

  return (
    // <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
    //   <Box
    //     sx={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //       mb: 2,
    //     }}
    //   >
    //     <Button
    //       startIcon={<ArrowBackIcon />}
    //       onClick={() => navigate(-1)}
    //       sx={{
    //         color: "#f9a109",
    //         borderColor: "#f9a109",
    //         textTransform: "none",
    //       }}
    //       variant="outlined"
    //     >
    //       Back
    //     </Button>

    //     {user.role === "agent" && ticket?.status !== "closed" && (
    //       <Button
    //         onClick={handleCloseTicket}
    //         color="error"
    //         variant="contained"
    //         sx={{ fontWeight: 600, textTransform: "none" }}
    //       >
    //         Close Ticket
    //       </Button>
    //     )}
    //   </Box>

    //   <Typography variant="h4" gutterBottom align="center">
    //     Support Ticket Details
    //   </Typography>

    //   {isLoading ? (
    //     <Box display="flex" justifyContent="center" mt={4}>
    //       <CircularProgress />
    //     </Box>
    //   ) : (
    //     <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
    //       <Box mb={2}>
    //         <Typography variant="h6" color="primary">
    //           Title:
    //         </Typography>
    //         <Typography variant="body1">{ticket.title}</Typography>
    //       </Box>
    //       <Box mb={2}>
    //         <Typography variant="h6" color="primary">
    //           Complaint:
    //         </Typography>
    //         <Typography
    //           variant="body1"
    //           sx={{
    //             whiteSpace: "wrap",
    //             width: "100%",
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           {ticket.complaint}
    //         </Typography>
    //       </Box>
    //       <Box mb={2}>
    //         <Typography variant="h6" color="primary">
    //           Assigned Agent:
    //         </Typography>
    //         <Typography variant="body1">
    //           {ticket.agent
    //             ? `${ticket.agent.username}-${ticket.agent.email}`
    //             : "None"}
    //         </Typography>
    //       </Box>
    //       <Box mb={2}>
    //         <Typography variant="h6" color="primary">
    //           Status:
    //         </Typography>
    //         <Typography
    //           variant="body1"
    //           sx={{
    //             display: "inline-block",
    //             backgroundColor: getStatusColor(ticket.status),
    //             px: 2,
    //             py: 0.5,
    //             borderRadius: 1,
    //             fontWeight: 500,
    //           }}
    //         >
    //           {ticket.status === "in_progress" ? "In Progress" : ticket.status}
    //         </Typography>
    //       </Box>
    //       {ticket.image && (
    //         <Box mb={2}>
    //           <Typography variant="h6" color="primary">
    //             Attachment:
    //           </Typography>
    //           <a href={ticket.image} target="_blank" rel="noopener noreferrer">
    //             <Box
    //               component="img"
    //               src={ticket.image}
    //               alt="Ticket attachment"
    //               sx={{
    //                 mt: 1,
    //                 maxWidth: "100%",
    //                 maxHeight: 300,
    //                 borderRadius: 2,
    //                 objectFit: "contain",
    //                 border: "1px solid #ccc",
    //               }}
    //             />
    //           </a>
    //         </Box>
    //       )}
    //     </Paper>
    //   )}

    //   <Box mt={4}>
    //     <CommentsSection
    //       comments={ticket.comments || []}
    //       currentUserId={user.id}
    //     />
    //   </Box>

    //   <Box mt={4}>
    //     {ticket.status !== "closed" && <CommentBox ticketId={id} />}
    //   </Box>
    // </Container>
    <h1>Details about Client</h1>
  );
};

export default ClientDetailsPage;
