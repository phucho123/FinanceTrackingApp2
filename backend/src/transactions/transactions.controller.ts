import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTransactionDto } from './dtos/CreateTransaction.dto';
import { TransactionsService } from './transactions.service';
import mongoose from 'mongoose';
import { UpdateTransactionDto } from './dtos/UpdateTransaction.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post()
  createTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.createNewTransaction(createTransactionDto);
  }

  @Get()
  getAllTransaction(@Query() query: ExpressQuery) {
    return this.transactionsService.getAllTransaction(query);
  }

  @Get(':id')
  async getTransaction(@Param('id') id: string) {
    const idIsValid = mongoose.Types.ObjectId.isValid(id);
    if (!idIsValid) throw new HttpException('Id Not Valid', 400);
    const transaction = await this.transactionsService.getTransactionById(id);
    if (!transaction) throw new HttpException('Transaction Not Found', 404);
    return transaction;
  }

  @Delete(':userId/:transactionId')
  async deleteTransaction(
    @Param('userId') userId: string,
    @Param('transactionId') transactionId: string,
  ) {
    const userIdIsValid = mongoose.Types.ObjectId.isValid(userId);
    if (!userIdIsValid) throw new HttpException('userId Not Valid', 400);
    const tranIdIsValid = mongoose.Types.ObjectId.isValid(transactionId);
    if (!tranIdIsValid) throw new HttpException('transactionId Not Valid', 400);
    const deletedTransaction = await this.transactionsService.deleteTransaction(
      userId,
      transactionId,
    );
    if (!deletedTransaction)
      throw new HttpException('Transaction Not Found', 404);
    return deletedTransaction;
  }

  @Patch(':id')
  async updateTransaction(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    const idIsValid = mongoose.Types.ObjectId.isValid(id);
    if (!idIsValid) throw new HttpException('Id Not Valid', 400);
    const updatedTransaction = await this.transactionsService.updateTransaction(
      id,
      updateTransactionDto,
    );
    if (!updatedTransaction)
      throw new HttpException('Transaction Not Found', 404);
    return updatedTransaction;
  }
}
