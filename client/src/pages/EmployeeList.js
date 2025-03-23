import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";

const GET_EMPLOYEES = gql`
  query {
    employees {
      id
      firstName
      lastName
      age
      dateOfJoining
      title
      department
      employeeType
      currentStatus
    }
  }
`;

const formatDate = (value) => {
  const timestamp = Number(value);
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) return "Invalid Date";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};

const formatStatus = (status) => (status === 1 || status === true ? "1" : "Inactive");

const EmployeeList = () => {
  const { loading, error, data, refetch } = useQuery(GET_EMPLOYEES);
  const location = useLocation();
  const [typeFilter, setTypeFilter] = useState("All");

  // ✅ Automatically refetch data when redirected from update/delete
  useEffect(() => {
    if (location.state?.refetch) {
      refetch();
    }
  }, [location.state, refetch]);

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p>Error fetching employees 😢 {error.message}</p>;

  const filteredEmployees = typeFilter === "All"
    ? data.employees
    : data.employees.filter(emp => emp.employeeType === typeFilter);

  return (
    <div className="container">
      <h2>Employee List</h2>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="filter">Filter by Type: </label>
        <select
          id="filter"
          onChange={(e) => setTypeFilter(e.target.value)}
          value={typeFilter}
        >
          <option value="All">All</option>
          <option value="FullTime">Full Time</option>
          <option value="PartTime">Part Time</option>
          <option value="Contract">Contract</option>
          <option value="Seasonal">Seasonal</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Joining</th>
            <th>Title</th>
            <th>Department</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.firstName} {emp.lastName}</td>
              <td>{emp.age}</td>
              <td>{formatDate(emp.dateOfJoining)}</td>
              <td>{emp.title}</td>
              <td>{emp.department}</td>
              <td>{emp.employeeType}</td>
              <td>{formatStatus(emp.currentStatus)}</td>
              <td>
                <Link to={`/employee/${emp.id}`}>
                  <button>View</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
