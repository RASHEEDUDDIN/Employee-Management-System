const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Age: { type: Number, required: true, min: 20, max: 70 },
    DateOfJoining: { type: Date, required: true },
    Title: { type: String, enum: ['Employee', 'Manager', 'Director', 'VP'], required: true },
    Department: { type: String, enum: ['IT', 'Marketing', 'HR', 'Engineering'], required: true },
    EmployeeType: { type: String, enum: ['FullTime', 'PartTime', 'Contract', 'Seasonal'], required: true },
    CurrentStatus: { type: Boolean, default: true }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
