import { Module } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { StatisticsController } from './statistics.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Employee } from 'src/employees/employee.model';

@Module({
  imports: [SequelizeModule.forFeature([Employee])],
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
