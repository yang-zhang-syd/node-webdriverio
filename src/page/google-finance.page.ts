import { Client } from 'webdriverio';

export class GoogleFinancePage {

    constructor() {
    }

    public open(shareLabel) {
         browser.url("https://finance.google.com/finance?q=" + shareLabel);
    }

    public getPrice() {
        var priceText = browser.element("//div[@id='price-panel']/div[1]/span[1]/span[1]").getText();
        return priceText;
    }

    public getChangeValue() {
        var changeText = browser.element("//div[@class='id-price-change nwp goog-inline-block']/span[1]/span[1]").getText();
        return changeText;
    }

    public getChangePct() {
        var changePctText = browser.element("//div[@class='id-price-change nwp goog-inline-block']/span[1]/span[2]").getText();
        return changePctText;
    }
}