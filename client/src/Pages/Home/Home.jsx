import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    AdminRecords();
  }, []);

  const AdminRecords = () => {
    axios.get("http://localhost:3000/auth/admin_records").then((result) => {
      if (result.data.Status) {
        setAdmins(result.data.Result);
      } else {
        alert(result.data.Error);
      }
    });
  };

  const adminCount = () => {
    axios.get("http://localhost:3000/auth/admin_count").then((result) => {
      if (result.data.Status) {
        setAdminTotal(result.data.Result[0].admin);
      }
    });
  };

  const employeeCount = () => {
    axios.get("http://localhost:3000/auth/employee_count").then((result) => {
      if (result.data.Status) {
        setEmployeeTotal(result.data.Result[0].employee);
      }
    });
  };

  const salaryCount = () => {
    axios.get("http://localhost:3000/auth/salary_count").then((result) => {
      if (result.data.Status) {
        setSalaryTotal(result.data.Result[0].salaryOFEmp);
      } else {
        alert(result.data.Error);
      }
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dashboard Overview</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card border-primary">
            <div className="card-header bg-primary text-white text-center">
              Admin
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Total Admins</h5>
              <p className="card-text display-4">{adminTotal}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-success">
            <div className="card-header bg-success text-white text-center">
              Employee
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Total Employees</h5>
              <p className="card-text display-4">{employeeTotal}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card border-secondary">
            <div className="card-header bg-secondary text-dark text-center">
              Salary
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Total Salary</h5>
              <p className="card-text display-4">${salaryTotal}</p>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center mt-5">List of Admins</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a, index) => (
              <tr key={index}>
                <td>{a.email}</td>
                <td>
                  <button className="btn btn-info btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;