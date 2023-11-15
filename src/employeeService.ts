export interface Employee {
    id: number;
    name: string;
    position: string;
  }
  
  export class EmployeeService {
    private static employees: Employee[] = [];
  
    static getRandomEmployee(): Employee {
      const randomIndex = Math.floor(Math.random() * this.employees.length);
      return this.employees[randomIndex];
    }
  
    static addEmployees(newEmployees: Employee[]): Employee[] {
      this.employees = this.employees.concat(newEmployees);
      return this.employees;
    }
  
    static deleteEmployee(id: number): Employee | undefined {
      const index = this.employees.findIndex((employee) => employee.id === id);
      if (index !== -1) {
        const deletedEmployee = this.employees.splice(index, 1)[0];
        return deletedEmployee;
      }
      return undefined;
    }
  
    static updateEmployee(id: number, updatedEmployee: Employee): Employee | undefined {
      const index = this.employees.findIndex((employee) => employee.id === id);
      if (index !== -1) {
        this.employees[index] = { ...this.employees[index], ...updatedEmployee };
        return this.employees[index];
      }
      return undefined;
    }
  
    static getEmployeeList(): Employee[] {
      return this.employees;
    }
  }
  