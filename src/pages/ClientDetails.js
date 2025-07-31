import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchClient } from "../store/clients/thunkCreators";
import { fetchProjectsByClient } from "../store/projects/thunkCreators";

const ClientDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { client, isLoading } = useSelector((state) => state.clients);
  const { projectsByClient } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchClient(id));
    dispatch(fetchProjectsByClient(id));
  }, [dispatch, id]);

  const handleAddProject = () => {
    navigate("/projects/add-new");
  };

  return (
    <div className="container mt-5">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="card shadow-sm mb-5">
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

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Projects by {client.name}</h2>
            <button onClick={handleAddProject} className="btn btn-success">
              Add New Project
            </button>
          </div>

          {projectsByClient.length === 0 ? (
            <div className="alert alert-info text-center">
              No projects found for this client. Click "Add New Project" to
              create one.
            </div>
          ) : (
            <div className="row g-4">
              {projectsByClient.map((project) => (
                <div key={project._id} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <p className="mb-1">
                        <strong>Client:</strong> {project.client?.name || "N/A"}
                      </p>
                      <p className="mb-3">
                        <strong>Status:</strong> {project.status}
                      </p>
                      <a
                        href={`/projects/edit/${project._id}`}
                        className="btn btn-outline-primary btn-sm"
                      >
                        Edit
                      </a>
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

export default ClientDetailsPage;
