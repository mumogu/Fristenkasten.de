import { FristenkastenAngularPage } from './app.po';

describe('fristenkasten-angular App', function() {
  let page: FristenkastenAngularPage;

  beforeEach(() => {
    page = new FristenkastenAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
