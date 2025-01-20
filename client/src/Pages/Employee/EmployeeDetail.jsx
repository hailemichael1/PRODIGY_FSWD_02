import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EmployeeDetail = () => {
    const [employee, setEmployee] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/employee/detail/'+id)
        .then(result => {
            setEmployee(result.data[0])
        })
        .catch(err => console.log(err))
    }, [])
    const handleLogout = () => {
        axios.get('http://localhost:3000/employee/logout')
        .then(result => {
          if(result.data.Status) {
            localStorage.removeItem("valid")
            navigate('/')
          }
        }).catch(err => console.log(err))
      }
  return (
    <div className="bg-light min-vh-100 d-flex flex-column ">
      <div className="p-2 d-flex justify-content-center shadow bg-primary text-white">
        <h4>Emoployee Management System</h4>
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center mt-5">
        <img
          src={`http://localhost:3000/Images/` + employee.image}
          className="emp_det_image"
        />
        <div
          className="bg-white p-4 mt-3  shadow text-center"
          style={{ width: "80%", maxWidth: "400px" }}
        >
           <h3 className="text-primary">Name: {employee.name}</h3>
           <h4 className="text-secondary">Email: {employee.email}</h4>
           <h4 className="text-secondary">Salary: ${employee.salary}</h4>
        </div>
        <div className="mt-4">
          <button className="btn btn-outline-primary me-2">Edit</button>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail