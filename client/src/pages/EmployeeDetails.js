// ✅ pages/EmployeeDetails.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_EMPLOYEE_BY_ID = gql`
  query getEmployee($id: ID!) {
    employee(id: $id) {
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

const UPDATE_EMPLOYEE = gql`
  mutation updateEmployee($id: ID!, $title: String, $department: String, $currentStatus: Int) {
    updateEmployee(id: $id, title: $title, department: $department, currentStatus: $currentStatus) {
      id
      title
      department
      currentStatus
    }
  }
`;

const DELETE_EMPLOYEE = gql`
  mutation deleteEmployee($id: ID!) {
    deleteEmployee(id: $id)
  }
`;

const formatDate = (value) => {
  const date = new Date(Number(value));
  return isNaN(date.getTime())
    ? "Invalid Date"
    : date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
};

const formatStatus = (status) => (status === 1 || status === true ? "Working" : "Inactive");

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_EMPLOYEE_BY_ID, { variables: { id } });

  const [updateEmployee] = useMutation(UPDATE_EMPLOYEE);
  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE);

  const [formData, setFormData] = useState({ title: "", department: "", currentStatus: 1 });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (data?.employee) {
      setFormData({
        title: data.employee.title,
        department: data.employee.department,
        currentStatus: data.employee.currentStatus,
      });
    }
  }, [data]);

  if (loading) return <p>Loading employee...</p>;
  if (error) return <p>Error loading employee: {error.message}</p>;

  const emp = data.employee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "currentStatus" ? parseInt(value) : value });
  };

  const handleUpdate = async () => {
    await updateEmployee({
      variables: { id, ...formData },
    });
    setSuccessMessage("✔️ Employee updated successfully!");
    setTimeout(() => {
      setSuccessMessage("");
      navigate("/");
    }, 1500);
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      await deleteEmployee({ variables: { id } });
      setSuccessMessage("✔️ Employee deleted successfully!");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  return (
    <div className="container">
      <h2>Employee Details</h2>

      {successMessage && (
        <p style={{ backgroundColor: "#d4edda", color: "#155724", padding: "10px", borderRadius: "5px" }}>
          {successMessage}
        </p>
      )}

      <p><strong>Name:</strong> {emp.firstName} {emp.lastName}</p>
      <p><strong>Age:</strong> {emp.age}</p>
      <p><strong>Date of Joining:</strong> {formatDate(emp.dateOfJoining)}</p>
      <p><strong>Title:</strong> {emp.title}</p>
      <p><strong>Department:</strong> {emp.department}</p>
      <p><strong>Type:</strong> {emp.employeeType}</p>
      <p><strong>Status:</strong> {formatStatus(emp.currentStatus)}</p>

      <hr />
      <h3>✏️ Update Employee</h3>
      <input name="title" value={formData.title} onChange={handleChange} />

      <select name="department" value={formData.department} onChange={handleChange}>
        <option value="">-- Select Department --</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
      </select>

      <select name="currentStatus" value={formData.currentStatus} onChange={handleChange}>
        <option value={1}>Working</option>
        <option value={0}>Inactive</option>
      </select>

      <button onClick={handleUpdate}>Update</button>

      <hr />
      <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white" }}>
        Delete Employee
      </button>

      <div style={{ marginTop: "20px" }}>
        <Link to="/">
          <button style={{ backgroundColor: "gray", color: "white" }}>⬅ Back to List</button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDetails;
