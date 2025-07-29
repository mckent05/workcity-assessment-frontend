import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSignUp } from "../../store/sessions/thunkCreators";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Navigation from "./Navigation";
import Submit from "./SubmitBtn";
import Title from "./Title";

const RegisterPage = () => {
  const [formErrorMessage, setFormErrorMessage] = useState({});
  const sessionDetails = useSelector((state) => state.sessions);
  const { isLoading } = sessionDetails;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const handleInput = (e) => {
    const { name, value, checked } = e.target;
    if (name === "role") {
      setUserDetails({ ...userDetails, role: checked ? "admin" : "user" });
    } else {
      setUserDetails({ ...userDetails, [name]: value });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    const result = await dispatch(handleSignUp(userDetails));
    if (handleSignUp.fulfilled.match(result)) {
      navigate("/login");
    } else {
      console.error(result.payload);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrorMessage).length) {
      const timer = setTimeout(() => {
        setFormErrorMessage({});
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formErrorMessage]);

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="w-100 w-lg-75 mx-auto d-flex flex-column align-items-center justify-content-center px-4 py-5">
        <Navigation
          text="Already have an account?"
          push="login"
          btnText="Login"
        />

        <form
          onSubmit={handleRegister}
          className="w-100"
          style={{ maxWidth: "600px", marginTop: "1.5rem" }}
        >
          <Title text="Create an account." />
          <div className="row g-3 mt-1">
            <div className="col-12 col-sm-6">
              <Input
                label="Name"
                name="name"
                type="text"
                handle={handleInput}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Input
                label="Username"
                name="username"
                type="text"
                handle={handleInput}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Input
                label="E-mail address"
                name="email"
                type="email"
                handle={handleInput}
              />
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control border-warning"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onInput={handleInput}
                  required
                  minLength={6}
                  style={{ fontSize: "1rem", padding: "1rem" }}
                />
                <label htmlFor="password" style={{ fontSize: "0.9rem", color: "#555" }}>
                  Password
                </label>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-floating">
                <input
                  type="password"
                  className={`form-control border-warning ${formErrorMessage.confirmPassword ? "is-invalid" : ""}`}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onInput={handleInput}
                  required
                  minLength={6}
                  style={{ fontSize: "1rem", padding: "1rem" }}
                />
                <label htmlFor="confirmPassword" style={{ fontSize: "0.9rem", color: "#555" }}>
                  Confirm Password
                </label>
                {formErrorMessage.confirmPassword && (
                  <div className="invalid-feedback">
                    {formErrorMessage.confirmPassword}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="role"
                name="role"
                checked={userDetails.role === 1}
                onChange={handleInput}
              />
              <label className="form-check-label" htmlFor="role">
                Sign up as an admin?
              </label>
            </div>
          </div>

          <div className="mt-3">
            <Submit title="Register" loading={isLoading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;