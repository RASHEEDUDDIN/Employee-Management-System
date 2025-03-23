import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EmployeeList from "./pages/EmployeeList";
import EmployeeCreate from "./pages/EmployeeCreate";
import EmployeeDetails from "./pages/EmployeeDetails";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/create" element={<EmployeeCreate />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
