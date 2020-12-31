import * as mongoose from 'mongoose'

const CurrencySchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  currencies: {
    type: [String],
    required: true
  },
}, { versionKey: false });

const CurrencyModel = mongoose.model('currencies', CurrencySchema);

export default CurrencyModel;