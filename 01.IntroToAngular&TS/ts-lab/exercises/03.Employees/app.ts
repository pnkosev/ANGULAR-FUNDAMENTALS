import { Junior, Manager, Senior } from "./Employees";

const junior = new Junior("Dido", 25);
const senior = new Senior("Mitio", 31);
const manager = new Manager("Joro", 34);

junior.salary = 2000;
junior.work();
junior.collectSalary();

senior.salary = 4000;
for (let i = 1; i <= 4; i++) {
  senior.work();
}
senior.collectSalary();

manager.salary = 4000;
manager.divident = 800;
for (let i = 1; i <= 3; i++) {
  manager.work();
}
manager.collectSalary();