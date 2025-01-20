import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:3000/verify")
      .then((result) => {
        if (result.data.Status) {
          if (result.data.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/employee_detail/" + result.data.id);
          }
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div
        className="p-4 rounded shadow-lg w-50 loginForm"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <h2 className="text-center text-primary mb-4">Login As</h2>
        <div className="d-flex justify-content-between mt-4 mb-3">
          <button
            type="button"
            className="btn btn-primary btn-lg w-100 me-2"
            onClick={() => navigate("/employee_login")}
          >
            Employee
          </button>
          <button
            type="button"
            className="btn btn-success btn-lg w-100 ms-2"
            onClick={() => navigate("/adminlogin")}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;