import { browser, by, element } from 'protractor';

export class GaleriaDeCartasPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mvat-root h1')).getText();
  }
}
