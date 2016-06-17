import chai from 'chai';
import promised from 'chai-as-promised';

import { Identity } from './identity';

chai.should();

/**
 * @test {Identity}
 */
describe('Identity', () => {
  it('should exist', () => {
    let identity = new Identity();
    (new Identity()).should.be.an.instanceof(Identity);
  });
});
