import * as webdriverio from 'webdriverio';
import * as _ from 'lodash';
import { GoogleFinancePage } from '../page/google-finance.page';
import { symbols } from '../data/share-labels';

var results = [];

describe('Get stock prices from Google\n', () => {

    beforeAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    it('get share prices', () => {
        var googleFinancePage = new GoogleFinancePage();
        _.map(symbols, (symbol) => {
            googleFinancePage.open(symbol);
            var price = googleFinancePage.getPrice();
            var changePct = googleFinancePage.getChangePct();
            var changeVal = googleFinancePage.getChangeValue();
            results.push({
                'symbol': symbol,
                'price': price,
                'changePct': changePct,
                'changeVal': changeVal
            });
        });
    });

    it('print results', () => {
        console.log(results);
    })
});