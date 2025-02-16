const Employee = require('../models/Employee');

const resolvers = {
    Query: {
        employees: async () => await Employee.find()
    },
    Mutation: {
        addEmployee: async (_, { firstName, lastName, age, dateOfJoining, title, department, employeeType }) => {
            const employee = new Employee({
                firstName,
                lastName,
                age,
                dateOfJoining,
                title,
                department,
                employeeType,
                currentStatus: 1  // ✅ Default value is 1 (Working)
            });
            return await employee.save();
        }
    }
};

module.exports = resolvers;
