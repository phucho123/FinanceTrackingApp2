import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { Transaction } from 'src/schemas/Transaction.schema';
import { CreateTransactionDto } from './dtos/CreateTransaction.dto';
import { HttpException } from '@nestjs/common';
import { UpdateTransactionDto } from './dtos/UpdateTransaction.dto';
import { Query } from 'express-serve-static-core';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
  ) {}

  async createNewTransaction({
    userId,
    ...createTransactionDto
  }: CreateTransactionDto) {
    const findUser = await this.userModel.findById(userId);
    if (!findUser) throw new HttpException('User Not Found', 404);
    const newTransaction = new this.transactionModel(createTransactionDto);
    const savedTransaction = await newTransaction.save();
    await findUser.updateOne({
      $push: { transactions: savedTransaction._id },
    });
    return savedTransaction;
  }

  getAllTransaction(query: Query) {
    const resPerPage = 3;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const categoryName = query.categoryName
      ? {
          categoryName: {
            $regex: query.categoryName,
            $options: 'i',
          },
        }
      : {};
    return this.transactionModel
      .find({ ...categoryName })
      .limit(resPerPage)
      .skip(skip);
  }

  getTransactionById(id: string) {
    return this.transactionModel.findById(id);
  }

  async deleteTransaction(userId: string, transactionId: string) {
    const findUser = await this.userModel.findById(userId);
    if (!findUser) throw new HttpException('User Not Found', 404);
    const deletedTransaction =
      await this.transactionModel.findByIdAndDelete(transactionId);
    await findUser.updateOne({
      $pull: { transactions: deletedTransaction._id },
    });
    return deletedTransaction;
  }

  updateTransaction(id: string, updateTransactionDto: UpdateTransactionDto) {
    return this.transactionModel.findByIdAndUpdate(id, updateTransactionDto, {
      new: true,
    });
  }
}
