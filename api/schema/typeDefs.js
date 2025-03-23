const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    dateOfJoining: String!
    title: String!
    department: String!
    employeeType: String!
    currentStatus: Int!
  }

  type Query {
    employees: [Employee]
    employee(id: ID!): Employee   # ✅ Add this
  }

  type Mutation {
    addEmployee(
      firstName: String!
      lastName: String!
      age: Int!
      dateOfJoining: String!
      title: String!
      department: String!
      employeeType: String!
    ): Employee

    updateEmployee(
      id: ID!
      title: String
      department: String
      currentStatus: Int
    ): Employee

    deleteEmployee(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
