import chai from 'chai';
import promised from 'chai-as-promised';

import { User } from './user';

chai.should();

/**
 * @test {User}
 */
describe('User', () => {
  it('should exist', () => {
    User.should.not.be.undefined;
  });
});
