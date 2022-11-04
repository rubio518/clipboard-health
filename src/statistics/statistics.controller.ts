import { Controller, Get, UseGuards } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getStatisticsForAll() {
    return this.statisticsService.getStatisticsForAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('on-contract')
  getStatisticsOnContract() {
    return this.statisticsService.getStatisticsOnContract();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('department')
  getStatisticsByDepartment() {
    return this.statisticsService.getStatisticsByDepartment();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('sub-department')
  getStatisticsBySubDepartment() {
    return this.statisticsService.getStatisticsBySubDepartment();
  }
}
