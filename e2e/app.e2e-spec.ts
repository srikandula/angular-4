import { FlipkartPage } from './app.po';

describe('flipkart App', () => {
  let page: FlipkartPage;

  beforeEach(() => {
    page = new FlipkartPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
