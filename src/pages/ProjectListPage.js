import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../store/projects/thunkCreators';

const ProjectListPage = () => {
  const { projects } = useSelector((state) => state.projects);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Project Dashboard</h2>
        <a href="/projects/add-new" className="btn btn-primary">
          Add Project
        </a>
      </div>

      <div className="row g-4">
        {projects.map((project) => (
          <div key={project._id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                {/* <h5 className="card-title">{project.title}</h5> */}
                <p className="card-text">{project.description}</p>
                <p className="mb-1"><strong>Client:</strong> {project.client.name}</p>
                <p className="mb-3"><strong>Status:</strong> {project.status}</p>
                <a href={`/projects/edit/${project._id}`} className="btn btn-outline-primary btn-sm">
                  Edit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectListPage;
