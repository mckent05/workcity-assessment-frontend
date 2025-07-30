import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createClient, fetchClient, updateClientAPI } from "../store/clients/thunkCreators";

const AddNewClientPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { client } = useSelector((state) => state.clients);

  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if(Object.keys(client).length === 0) {
      dispatch(fetchClient(id))
    }
    if (id && client) {
      setFormDetails({
        name: client.name || "",
        email: client.email || "",
        phone: client.phone || "",
      });
    }
  }, [id, client]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await dispatch(updateClientAPI({ ...formDetails, clientId: id })).unwrap();
      } else {
        await dispatch(createClient(formDetails)).unwrap();
      }
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const formFields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Phone", name: "phone", type: "text" },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <h2 className="text-center mb-4 fw-bold">
            {id ? "Edit Client" : "Add Client"}
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

            {/* <div className="form-group mb-4">
              <label htmlFor="status">Status</label>
              <select
                className="form-select"
                id="status"
                name="status"
                value={formDetails.status}
                onChange={handleChange}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div> */}

            <button type="submit" className="btn btn-primary w-100">
              {id ? "Update Client" : "Save Client"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewClientPage;
