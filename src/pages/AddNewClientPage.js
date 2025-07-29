import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Grid,
//   Paper,
//   IconButton,
// } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import UploadFileIcon from "@mui/icons-material/UploadFile";
// import SendIcon from "@mui/icons-material/Send";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createTicket } from "../store/tickets/thunkCreators";
import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create();

const AddNewClientPage = () => {
  // const [newTicket, setNewTicket] = useState({
  //   title: "",
  //   complaint: "",
  //   image: null,
  // });
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewTicket((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const uploadPicture = async (file) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", "sd31ytp8");
  //   const { data } = await instance.post(
  //     "https://api.cloudinary.com/v1_1/duj88gras/image/upload",
  //     formData
  //   );
  //   return data;
  // };

  // const handleFileChange = async (e) => {
  //   const img = e.target.files[0];
  //   const response = await uploadPicture(img);
  //   if (response.url) {
  //     toast.success("Image uploaded!");
  //     setNewTicket((prev) => ({
  //       ...prev,
  //       image: response.url,
  //     }));
  //   } else {
  //     toast.error("Error uploading image");
  //   }
  // };

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   const result = await dispatch(createTicket(newTicket));
  //   if (createTicket.fulfilled.match(result)) {
  //     navigate("/");
  //   }

  //   setNewTicket({ title: "", complaint: "", attachment: null });
  // };

  return (
    // <Container maxWidth="sm" sx={{ mt: 5 }}>
    //   <Paper elevation={3} sx={{ p: 4 }}>
    //     {/* Header */}
    //     <Box display="flex" alignItems="center" mb={2}>
    //       <IconButton onClick={() => navigate(-1)} sx={{ mr: 1 }}>
    //         <ArrowBackIcon sx={{ color: "#f9a109" }} />
    //       </IconButton>
    //       <Typography variant="h5" component="h2">
    //         Submit a Support Ticket
    //       </Typography>
    //     </Box>

    //     <form onSubmit={onSubmit}>
    //       <Grid container spacing={3}>
    //         <Grid item xs={12}>
    //           <TextField
    //             fullWidth
    //             label="Ticket Title"
    //             name="title"
    //             value={newTicket.title}
    //             onChange={handleChange}
    //             required
    //           />
    //         </Grid>

    //         <Grid item xs={12}>
    //           <TextField
    //             fullWidth
    //             multiline
    //             minRows={3}
    //             label="Complaint"
    //             name="complaint"
    //             value={newTicket.complaint}
    //             onChange={handleChange}
    //             required
    //           />
    //         </Grid>

    //         <Grid item xs={12}>
    //           <Typography variant="body2" gutterBottom>
    //             Upload File (Only .png, .jpg below 2MB)
    //           </Typography>
    //           <Button
    //             variant="outlined"
    //             component="label"
    //             startIcon={<UploadFileIcon />}
    //           >
    //             Choose File
    //             <input
    //               type="file"
    //               name="attachment"
    //               accept=".png,.jpg"
    //               onChange={handleFileChange}
    //               hidden
    //             />
    //           </Button>
    //         </Grid>

    //         <Grid
    //           item
    //           xs={12}
    //           width="100%"
    //           display="flex"
    //           justifyContent="space-between"
    //         >
    //           <Button
    //             variant="outlined"
    //             startIcon={<ArrowBackIcon />}
    //             onClick={() => navigate(-1)}
    //             sx={{
    //               color: "#f9a109",
    //               borderColor: "#f9a109",
    //               textTransform: "none",
    //             }}
    //           >
    //             Go Back
    //           </Button>
    //           <Button
    //             type="submit"
    //             variant="contained"
    //             endIcon={<SendIcon />}
    //             sx={{
    //               backgroundColor: "#f9a109",
    //               "&:hover": {
    //                 backgroundColor: "#e78f00",
    //               },
    //               textTransform: "none",
    //             }}
    //           >
    //             Submit
    //           </Button>
    //         </Grid>
    //       </Grid>
    //     </form>
    //   </Paper>
    // </Container>
    <h1>Add New Client</h1>
  );
};

export default AddNewClientPage;
