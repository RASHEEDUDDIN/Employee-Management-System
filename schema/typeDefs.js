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
        currentStatus: Int!  # Always default to 1 (working)
    }

    type Query {
        employees: [Employee]
    }

    type Mutation {
        addEmployee(
            firstName: String!,
            lastName: String!,
            age: Int!,
            dateOfJoining: String!,
            title: String!,
            department: String!,
            employeeType: String!
        ): Employee
    }
`;

module.exports = typeDefs;
