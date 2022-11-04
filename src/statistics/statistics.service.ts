import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Employee } from 'src/employees/employee.model';

import { fn, col } from 'sequelize';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectModel(Employee)
    private employeeModel: typeof Employee,
  ) {}

  async getStatisticsForAll() {
    const ss = await this.employeeModel.findOne({
      attributes: [
        [fn('AVG', col('salary')), 'averageSalary'],
        [fn('MIN', col('salary')), 'minSalary'],
        [fn('MAX', col('salary')), 'maxSalary'],
      ],
    });
    return ss;
  }
  async getStatisticsOnContract() {
    const ss = await this.employeeModel.findOne({
      attributes: [
        [fn('AVG', col('salary')), 'averageSalary'],
        [fn('MIN', col('salary')), 'minSalary'],
        [fn('MAX', col('salary')), 'maxSalary'],
      ],
      where: {
        onContract: true,
      },
    });
    return ss;
  }
  async getStatisticsByDepartment() {
    const ss = await this.employeeModel.findAll({
      attributes: [
        [fn('AVG', col('salary')), 'averageSalary'],
        [fn('MIN', col('salary')), 'minSalary'],
        [fn('MAX', col('salary')), 'maxSalary'],
        'department',
      ],
      group: 'department',
    });
    return ss;
  }
  async getStatisticsBySubDepartment() {
    const ss = await this.employeeModel.findAll({
      attributes: [
        [fn('AVG', col('salary')), 'averageSalary'],
        [fn('MIN', col('salary')), 'minSalary'],
        [fn('MAX', col('salary')), 'maxSalary'],
        'department',
        'sub_department',
      ],
      group: ['department', 'sub_department'],
    });
    return ss;
  }
}
