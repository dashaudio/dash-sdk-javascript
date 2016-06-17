import chai from 'chai';
import promised from 'chai-as-promised';

import { UserStore } from './user';
import { User } from '../models/user';

chai.should();
chai.use(promised);

/**
 * @test {UserStore}
 */
describe('User Store', () => {
  /**
   * @test {UserStore#fetch}
   */
  it('should fetch a user by ID', () => {
    let store = new UserStore();

    return store.fetch(null).should.eventually.satisfy((user) => {
      return user.should.be.an.instanceof(User);
    });
  });
});
