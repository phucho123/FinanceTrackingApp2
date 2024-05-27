import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Transaction {
  @Prop({ required: true })
  categoryName: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  money: number;

  @Prop({ required: false })
  imageUrl?: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
