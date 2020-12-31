import * as express from 'express';
import { currencyRouter } from '../controllers/currency';


const router = express.Router();

router.use('/availableCurrencies', currencyRouter)

export default router;
