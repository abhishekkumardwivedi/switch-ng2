import { SwitchNg2Page } from './app.po';

describe('switch-ng2 App', function() {
  let page: SwitchNg2Page;

  beforeEach(() => {
    page = new SwitchNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
