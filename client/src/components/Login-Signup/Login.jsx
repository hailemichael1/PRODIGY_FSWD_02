import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/auth/adminlogin", values)
      .then((result) => {
        if (result.data.loginStatus) {
          localStorage.setItem("valid", true);
          navigate("/dashboard");
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div
        className="p-4 rounded shadow-lg w-25 loginForm"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="text-danger text-center mb-3">
          {error && <strong>{error}</strong>}
        </div>
        <h2 className="text-center text-primary mb-4">Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-secondary">
            <label htmlFor="email" className="form-label">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="form-control rounded-pill border-0 shadow-sm"
            />
          </div>
          <div className="mb-3 text-secondary">
            <label htmlFor="password" className="form-label">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="form-control rounded-pill border-0 shadow-sm"
            />
          </div>
          <button className="btn btn-success w-100 rounded-pill mb-2 shadow-sm">
            Log in
          </button>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              name="tick"
              id="tick"
              className="form-check-input"
            />
            <label htmlFor="tick" className="form-check-label text-secondary">
              You agree with terms & conditions
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;