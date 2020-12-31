import * as dotenv from 'dotenv';
dotenv.config();
export const envVariable = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
}
