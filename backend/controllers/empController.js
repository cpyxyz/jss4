const mongoose = require("mongoose");
const Employee = require("../models/empModel");

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOne({ ssn: req.params.ssn });
    if (!employee) {
      res.status(404).json({ error: "not found" });
    } else {
      res.status(200).json({ employee });
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createEmployee = async (req, res) => {
  try {
    const data = req.body;
    const employee = await Employee.create(data);
    res.status(200).json({ message: "created", employee: employee });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOne({ ssn: req.params.ssn });
    if (!employee) {
      res.status(404).json({ error: "not found" });
    } else {
      const newEmp = await Employee.updateOne(
        { ssn: req.params.ssn },
        req.body
      );
      res.status(200).json({ message: "Updated", employee: newEmp });
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.deleteOne({ ssn: req.params.ssn });
    if (!employee) {
      res.status(404).json({ error: "not found" });
    } else {
      res.status(200).json({ message: "deleted", employee });
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = {
  getEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
  createEmployee,
};
