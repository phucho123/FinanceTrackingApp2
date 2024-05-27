import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CreateBudgetDto } from './dtos/CreateBudget.dto';
import { BudgetsService } from './budgets.service';
import mongoose from 'mongoose';
import { HttpException } from '@nestjs/common';
import { UpdateBudgetDto } from './dtos/UpdateBudget.dto';

@Controller('budgets')
export class BudgetsController {
  constructor(private budgetsService: BudgetsService) {}

  @Post()
  createBudget(@Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetsService.createNewBudget(createBudgetDto);
  }

  @Patch(':id')
  updateBudget(
    @Param('id') id: string,
    @Body() updateBudgetDto: UpdateBudgetDto,
  ) {}
}
