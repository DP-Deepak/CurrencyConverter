import { envVariable } from './configuration';
import * as mongoose from 'mongoose'
import seed from '../utils/seedData';

export const connectDB = async () => {
  try {
    await mongoose.connect(envVariable.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
    seed()
    console.log('MongoDB connected');
  } catch (err) {
    console.log('Error:', err);
  }
}