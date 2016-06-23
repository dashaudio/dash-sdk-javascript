import chai from 'chai';
import promised from 'chai-as-promised';

import { TokenStore } from './token';

chai.should();
chai.use(promised);

describe('Token Store', () => {
  /**
   * @test {TokenStore#link}
   */
  xit('should link tokens', () => {
    let primary = '...';
    let secondary = '...';
    let store = new TokenStore();

    return store.linkTokens(primary, secondary).should.eventually.satisfy((result) => {
      console.log(result);
      return res.should.not.be.undefined;
    });
  });
});
