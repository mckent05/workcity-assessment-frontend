import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ClientListPage = () => {
  const { clients, isLoading } = useSelector((state) => state.clients);

  return (
    <div className="container py-4">
      {isLoading ? (
        <h2> Fetching Clients...</h2>
      ) : (
        <div>
          <div className="d-flex justify-content-between">
            <h2 className="h4 fw-bold mb-4">Client Dashboard</h2>

            <a href="/projects" className="btn btn-primary mb-4">
              View Projects
            </a>

            <a href="/clients/add-new" className="btn btn-primary mb-4">
              Add Client
            </a>
          </div>

          <div className="row g-4">
            {clients.map((client) => (
              <div key={client._id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{client.name}</h5>
                    <p className="card-text">{client.email}</p>
                    <a
                      href={`/clients/${client._id}`}
                      className="btn btn-outline-primary btn-sm"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientListPage;
