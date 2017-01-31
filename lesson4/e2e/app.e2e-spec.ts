import { Lesson4Page } from './app.po';

describe('lesson4 App', function() {
  let page: Lesson4Page;

  beforeEach(() => {
    page = new Lesson4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
