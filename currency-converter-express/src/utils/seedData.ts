import CurrencyModel from '../models';
import { allCurrencies } from './constants';

const seed = async () => {

  let foundDocuments: any = await CurrencyModel.countDocuments();
  console.log('foundDocuments:', foundDocuments);

  if (foundDocuments <= 0) {
    foundDocuments = new CurrencyModel({
      currencies: allCurrencies,
    })
    await foundDocuments.save();
  }
}

export default seed;
