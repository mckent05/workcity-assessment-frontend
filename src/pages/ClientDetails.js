import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchClient } from "../store/clients/thunkCreators";
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
  const { id } = useParams();
  const { client } = useSelector((state) => state.clients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClient(id));
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title h4 fw-bold mb-3">{client.name}</h2>
          <p className="card-text mb-1">
            <strong>Email:</strong> {client.email}
          </p>
          <p className="card-text mb-3">
            <strong>Phone:</strong> {client.phone}
          </p>
          <a href={`/clients/edit/${id}`} className="btn btn-primary">
            Edit Client
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsPage;
