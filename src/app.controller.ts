import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { data, reportType } from './data';

@Controller('Report/:type')
export class AppController {
  @Get()
  getAllIncomeReports(@Param('type') type: string) {
    const ReportType =
      type === 'income' ? reportType.Expense : reportType.Income;
    return data.report.filter((report) => report.type === ReportType);
  }

  @Get('/:id')
  getIncomeReportById(@Param('id') id: string) {
    const rid = id;
    return data.report.filter((report) => report.id === rid);
  }

  @Post()
  createReport() {
    return 'posted';
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
