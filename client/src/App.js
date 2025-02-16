import React from "react";
import EmployeeList from "./EmployeeList";
import EmployeeCreate from "./EmployeeCreate";
import "./styles.css"; 

function App() {
  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeCreate />
      <EmployeeList />
    </div>
  );
}

export default App;
