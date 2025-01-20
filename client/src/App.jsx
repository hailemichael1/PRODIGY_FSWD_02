import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login-Signup/Login";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Employee from "./Pages/Employee/Employee";
import Category from "./Pages/Category/Category";
import AddCategory from "./Pages/Category/AddCategory";
import AddEmployee from "./Pages/Employee/AddEmployee";
import EditEmployee from "./Pages/Employee/EditEmployee";
import Start from "./components/Login-Signup/Start";
import EmployeeLogin from "./components/Login-Signup/EmployeeLogin";
import EmployeeDetail from "./Pages/Employee/EmployeeDetail";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/employee_login" element={<EmployeeLogin />}></Route>
        <Route path="/employee_detail/:id" element={<EmployeeDetail />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="" element={<Home />}></Route>
          <Route path="/dashboard/employee" element={<Employee />}></Route>
          <Route path="/dashboard/category" element={<Category />}></Route>
          <Route
            path="/dashboard/add_category"
            element={<AddCategory />}
          ></Route>
          <Route
            path="/dashboard/add_employee"
            element={<AddEmployee />}
          ></Route>
          <Route
            path="/dashboard/edit_employee/:id"
            element={<EditEmployee />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
