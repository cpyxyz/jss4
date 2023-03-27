const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
  getEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
  createEmployee,
} = require("./controllers/empController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("get /");
});

app.get("/emps", getEmployees);
app.get("/emp/:ssn", getEmployee);
app.post("/emp", createEmployee);
app.delete("/emp/:ssn", deleteEmployee);
app.put("/emp/:ssn", updateEmployee);

mongoose
  .connect("mongodb://localhost:27017/p1")
  .then((e) => {
    app.listen(8000, () => {
      console.log("server up on 8000");
    });
  })
  .catch((err) => {
    console.log(`error: ${err}`);
  });
