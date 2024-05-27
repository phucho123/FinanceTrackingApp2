import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Transaction } from './Transaction.schema';
import { Budget } from './Budget.schema';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  avatarUrl: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  })
  transactions: Transaction[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Budget' }],
  })
  budgets: Budget[];
}

export const UserSchema = SchemaFactory.createForClass(User);
