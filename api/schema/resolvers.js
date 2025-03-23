const Employee = require('../models/Employee');

const resolvers = {
  Query: {
    employees: async () => await Employee.find(),
    employee: async (_, { id }) => await Employee.findById(id)  // ✅ Add this
  },
  Mutation: {
    addEmployee: async (_, { firstName, lastName, age, dateOfJoining, title, department, employeeType }) => {
      const employee = new Employee({
        firstName,
        lastName,
        age,
        dateOfJoining: new Date(dateOfJoining),
        title,
        department,
        employeeType,
        currentStatus: 1
      });
      return await employee.save();
    },
    updateEmployee: async (_, { id, title, department, currentStatus }) => {
      return await Employee.findByIdAndUpdate(
        id,
        { title, department, currentStatus },
        { new: true }
      );
    },
    deleteEmployee: async (_, { id }) => {
      const result = await Employee.findByIdAndDelete(id);
      return !!result;
    }
  }
};

module.exports = resolvers;
