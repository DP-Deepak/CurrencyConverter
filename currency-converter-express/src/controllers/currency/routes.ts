import * as express from 'express';
import CurrencyController from './Controller';

const currencyRouter = express.Router();

currencyRouter.get('/', CurrencyController.get);

export default currencyRouter;
