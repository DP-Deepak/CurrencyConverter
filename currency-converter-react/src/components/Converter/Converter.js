import React, { Component } from "react";
import { getConversion, getCurrencies } from "../../api/api";

class Converter extends Component {
    state = {
        result: null,
        fromCurrency: 'INR',
        toCurrency: 'AUD',
        amount: 1,
        currencies: [],
    };

    // Initializes the currencies with values from the api
    async componentDidMount() {
        const fetchedCurrencies = await getCurrencies()
        this.setState({ currencies: fetchedCurrencies })
    }

    // Fetch the current rate and compute the amount
    convertHandler = async () => {
        const { fromCurrency, toCurrency, amount } = this.state
        if (fromCurrency !== toCurrency) {
            try {

                const { rates } = await getConversion(fromCurrency, toCurrency)
                const result = amount * (rates[toCurrency]);
                this.setState({ result: result.toFixed(5) })
            } catch (error) {
                console.log('error:', error);
            }
        } else {
            this.setState({ result: "You can't convert the same currency!" })
        }
    };

    // Handle the dropdown options and their selection
    selectHandler = (event) => {
        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value })
        }
        if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value })
        }
    }

    render() {
        const { amount, fromCurrency, currencies, toCurrency, result } = this.state;
        return (
            <div className="Converter">
                <h2>

                    <span>Currency </span>
                 Converter
                 {` `}
                    <span >&#x24;</span>
                    {` `}
                    <span >&#x1f4b5;</span>
                    {` `}
                    <span >&#165;</span>

                </h2>
                <div className="Form">
                    <input
                        name="amount"
                        type="number"
                        value={amount}
                        onChange={event =>
                            this.setState({ amount: event.target.value })
                        }
                    />
                    <select
                        name="from"
                        onChange={(event) => this.selectHandler(event)}
                        value={fromCurrency}
                    >
                        {currencies.map(currency => (
                            <option key={currency}>{currency}</option>
                        ))}
                    </select>
                    <h4>  {` `} =&gt;  {` `} </h4>
                    <select
                        name="to"
                        onChange={(event) => this.selectHandler(event)}
                        value={toCurrency}
                    >
                        {currencies.map(currency => (
                            <option key={currency}>{currency}</option>
                        ))}
                    </select>
                    <button onClick={this.convertHandler}>Convert</button>
                </div>
                {result &&
                    <h3>{result}</h3>
                }
            </div>
        );
    }
}

export default Converter;