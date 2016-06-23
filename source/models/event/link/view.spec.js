import chai from 'chai';
import LinkViewEvent from './view';

/**
 * @test {LinkViewEvent}
 */
describe('Link View Event', () => {
  it('should exist', () => {
    LinkViewEvent.should.not.be.undefined;
  });

  /**
   * @test {LinkViewEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new LinkViewEvent('http://example.com/content.html');
    let type = event.build()['@type'];
    type.should.equal('ViewAction');
  });

  /**
   * @test {LinkViewEvent#constructor}
   */
  it('should fail to construct without a URL', () => {
    (() => new LinkViewEvent()).should.throw(Error);
  });

  /**
   * @test {LinkViewEvent#build}
   */
  it('should contain the URL in its dictionary', () => {
    let event = new LinkViewEvent('http://example.com/content.html');
    let dictionary = event.build();
    dictionary.object.should.equal('http://example.com/content.html');
  });
});
