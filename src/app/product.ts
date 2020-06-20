import { mongoose } from 'mongoose';

export class Product {
  _id: mongoose.Types.ObjectId;
  title: string;
  description: string;
  quantity: number;
  price: number;
  actual_price: number;
  expire_date: Date;
  date: Date;
  user: mongoose.Types.ObjectId;
}
