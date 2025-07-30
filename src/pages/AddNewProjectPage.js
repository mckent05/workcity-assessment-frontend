import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProject,
  fetchProject,
  updateProjectAPI,
} from "../store/projects/thunkCreators";
import { updateProject } from "../store/projects/projectSlice";

const AddNewProjectPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { project, isLoading } = useSelector((state) => state.projects);
  const { clients } = useSelector((state) => state.clients);

  const [formDetails, setFormDetails] = useState({
    title: "",
    status: "pending",
    description: "",
  });

  const randomID = Math.floor(Math.random() * clients.length);

  useEffect(() => {
    if (id && Object.keys(project).length === 0) {
      dispatch(fetchProject(id));
    }
    if (id && project) {
      setFormDetails({
        title: project.title || "",
        description: project.description || "",
        status: project.status,
      });
    }
  }, [id, project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await dispatch(
          updateProjectAPI({ ...formDetails, projectId: id })
        ).unwrap();
      } else {
        await dispatch(
          createProject({ ...formDetails, client: clients[randomID]._id })
        ).unwrap();
      }
      navigate("/projects");
    } catch (err) {
      console.error(err);
    }
  };

  const formFields = [
    { label: "Title", name: "title", type: "text" },
    { label: "Description", name: "description", type: "text" },
  ];

  return (
    <div className="container mt-5">
      {isLoading ? (
        <h2> Loading...</h2>
      ) : (
        <div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <h2 className="text-center mb-4 fw-bold">
                {id ? "Edit Project" : "Add Project"}
              </h2>
              <form onSubmit={handleSubmit}>
                {formFields.map(({ label, name, type }) => (
                  <div className="form-group mb-3" key={name}>
                    <label htmlFor={name}>{label}</label>
                    <input
                      type={type}
                      className="form-control"
                      id={name}
                      name={name}
                      value={formDetails[name]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ))}

                <div className="form-group mb-4">
                  <label htmlFor="status">Status</label>
                  <select
                    className="form-select"
                    id="status"
                    name="status"
                    value={formDetails.status}
                    onChange={handleChange}
                  >
                    <option value="pending">Pending</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  {id ? "Update Project" : "Save Project"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewProjectPage;
