import React from "react";
import { useQuery, gql } from "@apollo/client";

// GraphQL Query to Fetch Employees
const GET_EMPLOYEES = gql`
  query {
    employees {
      id
      firstName
      lastName
      age
      dateOfJoining  # ✅ Fetch Date of Joining
      title
      department
      employeeType
      currentStatus  # ✅ Fetch Current Status
    }
  }
`;

// Function to Convert Timestamp to Readable Date
const formatDate = (timestamp) => {
  const date = new Date(parseInt(timestamp)); // Convert timestamp to Date object
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
   
  });
};

const EmployeeList = ({ refetchEmployees }) => {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p>Error fetching employees 😢 {error.message}</p>;

  return (
    <div>
      <h2>Employee List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Joining</th>  {/* ✅ Add Date Column */}
            <th>Title</th>
            <th>Department</th>
            <th>Type</th>
            <th>Status</th>  {/* ✅ Add Status Column */}
          </tr>
        </thead>
        <tbody>
          {data?.employees?.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.firstName} {emp.lastName}</td>
              <td>{emp.age}</td>
              <td>{formatDate(emp.dateOfJoining)}</td> {/* ✅ Convert Date */}
              <td>{emp.title}</td>
              <td>{emp.department}</td>
              <td>{emp.employeeType}</td>
              <td>{emp.currentStatus === 1 ? "Working" : "Inactive"}</td> {/* ✅ Show Status */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
