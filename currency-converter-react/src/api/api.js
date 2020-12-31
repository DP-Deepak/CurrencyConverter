import axios from 'axios'

const getCurrencies = async () => {
  try {
    const { data: { data: { currencies } } } = await axios.get(`/api/availableCurrencies`);
    return currencies
  } catch (err) {
    console.log('err===>:', err);
    const errors = err;
    if (errors) {
      return errors
    }
  }
}

const getConversion = async (fromCurrency, toCurrency) => {
  try {
    const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`);
    return data
  } catch (err) {
    console.log('error while fetching rates:');
    const errors = err;
    if (errors) {
      return errors
    }
  }
}

export { getConversion, getCurrencies }
