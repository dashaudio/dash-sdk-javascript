import chai from 'chai';
import promised from 'chai-as-promised';

import Store from './store';

chai.should();
chai.use(promised);

describe('Store', () => {
  /**
   * @test {Store}
   */
  it('should exist', () => {
    Store.should.not.be.undefined;
  });

  /**
   * @test {Store#constructor}
   */
  it('should take a fetch parameter', () => {
    let fetch = () => {};
    let store = new Store({ fetch });
    store.fetch.should.equal(fetch);
  });

  /**
   * @test {Store#constructor}
   */
  it('should take a token parameter', () => {
    let token = '123';
    let store = new Store({ token });
    store.token.should.equal(token);
  });

  /**
   * @test {Store#headers}
   */
  it('should return headers containing authorization with bearer token', () => {
    let token = '123';
    let store = new Store({ token });
    store.headers()['Authorization'].should.contain(token);
  });

  /**
   * @test {Store#headers}
   */
  it('should return headers containing JSON content type', () => {
    let store = new Store();
    store.headers()['Content-Type'].should.contain('application/json');
  });

  /**
   * @test {Store#validateResponse}
   */
  it('should validate a HTTP response', () => {
    let store = new Store();
    let response = new Response('', { status: 404 });
    (() => store.validateResponse(response)).should.throw;
  });

  /**
   * @test {Store#parseResponse}
   */
  it('should parse a HTTP response', () => {
    let store = new Store();
    let response = new Response('[1,2,3]', {});

    return store.parseResponse(response).should.eventually.deep.equal([1,2,3]);
  });
});
