import { Lesson11Page } from './app.po';

describe('lesson11 App', function() {
  let page: Lesson11Page;

  beforeEach(() => {
    page = new Lesson11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
