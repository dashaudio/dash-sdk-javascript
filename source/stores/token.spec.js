import chai from 'chai';
import promised from 'chai-as-promised';

import TokenStore from './token';

import fixtures from './token.spec.fixtures.json';

chai.should();
chai.use(promised);

describe('Token Store', () => {
  /**
   * @test {TokenStore}
   */
  it('should exist', () => {
    TokenStore.should.not.be.undefined;
  });

  /**
   * @test {TokenStore#linkToken}
   */
  xit('should link tokens', () => {
    let primary = fixtures.accounts.primary.token;
    let secondary = fixtures.accounts.secondary.token;
    let store = new TokenStore({ token: primary });

    return store.linkToken(secondary).should.eventually.be.fulfilled;
  });
});
