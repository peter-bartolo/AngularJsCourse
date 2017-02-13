import { Lesson5Page } from './app.po';

describe('lesson5 App', function() {
  let page: Lesson5Page;

  beforeEach(() => {
    page = new Lesson5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
