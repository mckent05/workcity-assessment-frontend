import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProjectAPI,
  fetchProjects,
} from "../store/projects/thunkCreators";

const ProjectListPage = () => {
  const { projects, isLoading } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  const role = JSON.parse(localStorage.getItem("role")) || "user";

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleDeleteProject = (projectId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirmDelete) {
      dispatch(deleteProjectAPI(projectId));
    }
  };

  return (
    <div className="container mt-5">
      {isLoading ? (
        <h4>Loading projects...</h4>
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Project Dashboard</h2>
            <a href="/projects/add-new" className="btn btn-primary">
              Add Project
            </a>
          </div>

          {projects.length === 0 ? (
            <div className="alert alert-info text-center">
              No projects found. Click "Add Project" to create one.
            </div>
          ) : (
            <div className="row g-4">
              {projects.map((project) => (
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
                        className="btn btn-outline-primary btn-sm me-2"
                      >
                        Edit
                      </a>
                      {role === "admin" && (
                        <button
                          className="btn btn-danger btn-sm fw-bold px-4"
                          onClick={() => handleDeleteProject(project._id)}
                        >
                          Delete
                        </button>
                      )}
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

export default ProjectListPage;
