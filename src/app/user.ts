import { mongoose } from 'mongoose';

export class User {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  date: Date;
  adress: string;
  lat: number;
  lng: number
}
