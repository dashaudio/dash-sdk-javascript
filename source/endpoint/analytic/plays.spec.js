import chai from 'chai';
import PlaysAnalyticEndpoint from './plays';
import moment from 'moment';

/**
 * @test {PlaysAnalyticEndpoint}
 */
describe('Plays Analytic Endpoint', () => {
  it('should exist', () => {
    (new PlaysAnalyticEndpoint()).should.be.an.instanceof(PlaysAnalyticEndpoint);
  });

  /**
   * @test {PlaysAnalyticEndpoint#collection}
   */
  describe('Collection URL', () => {
    let endpoint = new PlaysAnalyticEndpoint('http://test.com');
    let start = moment().subtract(1, 'day').toDate();
    let end = moment().toDate();
    let client = 'test';
    let url = endpoint.collection(start, end, client);

    it('should not be null', () => {
      url.should.not.be.null;
    });

    it('should contain the domain', () => {
      url.should.contain('http://test.com');
    });

    it('should contain the start time', () => {
      url.should.contain(start.getTime());
    });

    it('should contain the end time', () => {
      url.should.contain(end.getTime());
    });

    it('should contain the client identifier', () => {
      url.should.contain(client);
    });
  });
});
