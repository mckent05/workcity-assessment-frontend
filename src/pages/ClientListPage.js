import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteClientAPI } from "../store/clients/thunkCreators";

const ClientListPage = () => {
  const dispatch = useDispatch();
  const { clients, isLoading } = useSelector((state) => state.clients);

  const role = JSON.parse(localStorage.getItem("role"));

  const handleDeleteClient = (clientId) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      dispatch(deleteClientAPI(clientId));
    }
  };

  return (
    <div className="container py-4">
      {isLoading ? (
        <h2>Fetching Clients...</h2>
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 fw-bold m-0">Client Dashboard</h2>

            <div>
              <a href="/projects" className="btn btn-primary me-2">
                View Projects
              </a>
              <a href="/clients/add-new" className="btn btn-primary">
                Add Client
              </a>
            </div>
          </div>

          {clients.length === 0 ? (
            <div className="alert alert-info text-center">
              No clients found. Click "Add Client" to get started.
            </div>
          ) : (
            <div className="row g-4">
              {clients.map((client) => (
                <div key={client._id} className="col-12 col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{client.name}</h5>
                      <p className="card-text">{client.email}</p>

                      <div className="d-flex justify-content-around mt-3">
                        <a
                          href={`/clients/${client._id}`}
                          className="btn btn-outline-primary btn-sm"
                        >
                          View Profile
                        </a>
                        {role === "admin" && (
                          <button
                            className="btn btn-danger btn-sm fw-bold px-4"
                            onClick={() => handleDeleteClient(client._id)}
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClientListPage;
