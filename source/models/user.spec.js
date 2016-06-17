import chai from 'chai';
import promised from 'chai-as-promised';

import { User } from './user';

chai.should();

describe('User', () => {
  it('should exist', () => {
    let user = new User();
    (new User()).should.be.an.instanceof(User);
  });
});
