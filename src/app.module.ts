import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { EmployeesModule } from './employees/employees.module';
import { Employee } from './employees/employee.model';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './database.sqlite3',
      models: [Employee],
    }),
    EmployeesModule,
    StatisticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
