import express from 'express';
import { Employee, EmployeeService } from './employeeService';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/employee/random', (req, res) => {
  const randomEmployee = EmployeeService.getRandomEmployee();
  res.json(randomEmployee);
});

app.post('/api/employee/add', (req, res) => {
  const newEmployees: Employee[] = req.body;
  const addedEmployees = EmployeeService.addEmployees(newEmployees);
  res.json(addedEmployees);
});

app.delete('/api/employee/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deletedEmployee = EmployeeService.deleteEmployee(id);
  res.json(deletedEmployee);
});

app.put('/api/employee/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedEmployee = EmployeeService.updateEmployee(id, req.body);
  res.json(updatedEmployee);
});

app.get('/api/employee/list', (req, res) => {
  const employees = EmployeeService.getEmployeeList();
  res.json(employees);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
