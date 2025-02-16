const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    dateOfJoining: { type: Date, required: true },  // ✅ Ensure Date type
    title: { type: String, required: true },
    department: { type: String, required: true },
    employeeType: { type: String, required: true },
    currentStatus: { type: Number, default: 1 }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
