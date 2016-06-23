import chai from 'chai';
import promised from 'chai-as-promised';

import { Identity } from './identity';

chai.should();

describe('Identity', () => {
  /**
   * @test {Identity}
   */
  it('should exist', () => {
    Identity.should.not.be.undefined;
  });

  /**
   * @test {Identity#constructor}
   */
  it('should take an "id" parameter', () => {
    let identity = new Identity({ id: 12345 });
    identity.id.should.equal(12345);
  });

  /**
   * @test {Identity#constructor}
   */
  it('should take a "provider" parameter', () => {
    let identity = new Identity({ provider: 'facebook' });
    identity.provider.should.equal('facebook');
  });

  /**
   * @test {Identity#constructor}
   */
  it('should take a "token" parameter', () => {
    let identity = new Identity({ token: '12345' });
    identity.token.should.equal('12345');
  });
});
