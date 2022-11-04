import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
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

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    this.employeeModel.destroy({ where: { id } });
  }
}
