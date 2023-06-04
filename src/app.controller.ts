import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
@Controller('Report')
export class AppController {
  @Get('/')
  getAllIncomeReports() {
    return {};
  }

  @Get()
  getIncomeReportById() {
    return {};
  }

  @Post()
  createReport() {
    return { s: 'salam' };
  }

  @Put(':id')
  updateReport() {
    return 'updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'deleted';
  }
}

//http:localhost:3000/report/income/ajiow22w1d2
