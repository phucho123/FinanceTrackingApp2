import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Budget } from 'src/schemas/Budget.schema';
import { User } from 'src/schemas/User.schema';
import { CreateBudgetDto } from './dtos/CreateBudget.dto';
import { Transaction } from 'src/schemas/Transaction.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class BudgetsService {
  constructor(
    @InjectModel(Budget.name) private budgetModel: Model<Budget>,
    private usersService: UsersService,
  ) {}

  calculateSpendMoney(transactionList: Transaction[]) {
    return transactionList.reduce((result, element) => {
      return result + element.money;
    }, 0);
  }

  async createNewBudget({ userId, ...createBudgetDto }: CreateBudgetDto) {
    const user = await this.usersService.findById(userId);
    console.log(user);
    if (!user) throw new HttpException('User Not Found', 404);
    const { categoryName } = createBudgetDto;
    const filteredTransactions = user.transactions.filter((transaction) => {
      return transaction.categoryName === categoryName;
    });
    const spendMoney = this.calculateSpendMoney(filteredTransactions);
    const newBudget = new this.budgetModel({
      ...createBudgetDto,
      spendMoney: spendMoney,
    });
    const savedBudget = await newBudget.save();
    await user.updateOne({
      $push: { budgets: savedBudget._id },
    });
    return savedBudget;
  }
}
