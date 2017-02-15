import { Lesson6Page } from './app.po';

describe('lesson6 App', function() {
  let page: Lesson6Page;

  beforeEach(() => {
    page = new Lesson6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
