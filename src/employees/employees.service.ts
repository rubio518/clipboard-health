import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.model';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee)
    private employeeModel: typeof Employee,
  ) {}
  create(createEmployeeDto: CreateEmployeeDto) {
    this.employeeModel.create({ ...createEmployeeDto });
  }

  findAll() {
    return this.employeeModel.findAll();
  }

  remove(id: number) {
    this.employeeModel.destroy({ where: { id } });
  }
}
