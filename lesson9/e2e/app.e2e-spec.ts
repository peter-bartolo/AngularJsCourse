import { Lesson9Page } from './app.po';

describe('lesson9 App', function() {
  let page: Lesson9Page;

  beforeEach(() => {
    page = new Lesson9Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
