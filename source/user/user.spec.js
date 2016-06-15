import { expect } from 'chai';
import { User } from './user';

describe('User', () => {
  it('should have a name', () => {
    let user = new User();
    expect(user.name).to.be.a.function;
    expect(user.name()).to.equal('my name');
  });

  it('should provide the current user', () => {
    let user = User.current();
    expect(user).not.to.be.null;
    expect(user.name).to.be.a.function;
    expect(user.name()).to.equal('my name');
  });
});
