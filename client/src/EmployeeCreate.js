import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

// GraphQL Mutation to Add an Employee
const ADD_EMPLOYEE = gql`
  mutation addEmployee(
    $firstName: String!,
    $lastName: String!,
    $age: Int!,
    $dateOfJoining: String!,
    $title: String!,
    $department: String!,
    $employeeType: String!
  ) {
    addEmployee(
      firstName: $firstName,
      lastName: $lastName,
      age: $age,
      dateOfJoining: $dateOfJoining,
      title: $title,
      department: $department,
      employeeType: $employeeType
    ) {
      id
      firstName
      lastName
      age
      dateOfJoining
    }
  }
`;

const EmployeeCreate = ({ refetchEmployees }) => {
  // ✅ Fix: Define `formData` using `useState`
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    dateOfJoining: "",
    title: "Employee",
    department: "IT",
    employeeType: "FullTime",
  });

  // ✅ Fix: Define `addEmployee` using `useMutation`
  const [addEmployee] = useMutation(ADD_EMPLOYEE, {
    onCompleted: () => {
      if (refetchEmployees) refetchEmployees(); // ✅ Refresh Employee List
    }
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const selectedDate = new Date(formData.dateOfJoining);
      selectedDate.setHours(12, 0, 0, 0); // ✅ Prevents time zone shift

      await addEmployee({
        variables: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          age: parseInt(formData.age),
          dateOfJoining: selectedDate.toISOString(), // ✅ Convert to ISO format
          title: formData.title,
          department: formData.department,
          employeeType: formData.employeeType
        }
      });

      alert("Employee added successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        dateOfJoining: "",
        title: "Employee",
        department: "IT",
        employeeType: "FullTime"
      });
    } catch (error) {
      console.error("Error adding employee:", error.message);
    }
  };

  return (
    <div>
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age (20-70)" min="20" max="70" value={formData.age} onChange={handleChange} required />
        <input type="date" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} required />

        <select name="title" value={formData.title} onChange={handleChange}>
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="Director">Director</option>
          <option value="VP">VP</option>
        </select>

        <select name="department" value={formData.department} onChange={handleChange}>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
        </select>

        <select name="employeeType" value={formData.employeeType} onChange={handleChange}>
          <option value="FullTime">Full Time</option>
          <option value="PartTime">Part Time</option>
          <option value="Contract">Contract</option>
          <option value="Seasonal">Seasonal</option>
        </select>

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeCreate;
