import { IEXClient } from 'iex-api';

const iex = new IEXClient(fetch.bind(window));

export default class StockDetailsService {
    // static async getStockDetails(symbol) {
    //     const response = await fetch(`http://steveberg.herokuapp.com/symbol/${symbol.toLowerCase()}.json`, {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //         }
    //     });

    //     if (!response.ok) {
    //         throw new Error(`Data for ${symbol} was not found`);
    //     }

    //     const responseJSON = response.json();

    //     return responseJSON.history;
    // }

    static async getStockDetails(symbol) {
        return await iex.stockChart(symbol, '6m');
    }

    static async getAvailableSymbols() {
        const symbolData = await iex.symbols();

        return symbolData.filter(datum => datum.isEnabled);
    }
}
