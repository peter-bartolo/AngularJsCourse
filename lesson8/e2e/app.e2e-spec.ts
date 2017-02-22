import { Lesson8Page } from './app.po';

describe('lesson8 App', function() {
  let page: Lesson8Page;

  beforeEach(() => {
    page = new Lesson8Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
