import { GaleriaDeCartasPage } from './app.po';

describe('galeria-de-cartas App', () => {
  let page: GaleriaDeCartasPage;

  beforeEach(() => {
    page = new GaleriaDeCartasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to mvat!!');
  });
});
