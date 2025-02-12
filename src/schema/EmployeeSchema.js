const { gql } = require('apollo-server-express');
const Employee = require('../models/Employee');

const typeDefs = gql`
    type Employee {
        id: ID!
        FirstName: String!
        LastName: String!
        Age: Int!
        DateOfJoining: String!
        Title: String!
        Department: String!
        EmployeeType: String!
        CurrentStatus: Boolean!
    }

    type Query {
        getAllEmployees: [Employee]
    }

    type Mutation {
        createEmployee(
            FirstName: String!,
            LastName: String!,
            Age: Int!,
            DateOfJoining: String!,
            Title: String!,
            Department: String!,
            EmployeeType: String!
        ): Employee
    }
`;

const resolvers = {
    Query: {
        getAllEmployees: async () => await Employee.find(),
    },
    Mutation: {
        createEmployee: async (_, args) => {
            const newEmployee = new Employee({ ...args, CurrentStatus: true });
            return await newEmployee.save();
        }
    }
};

module.exports = { typeDefs, resolvers };
