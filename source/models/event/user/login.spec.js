import chai from 'chai';
import UserLoginEvent from './login';

/**
 * @test {UserLoginEvent}
 */
describe('User Login Event', () => {
  it('should exist', () => {
    UserLoginEvent.should.not.be.undefined;
  });

  /**
   * @test {UserLoginEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new UserLoginEvent();
    let type = event.build()['@type'];
    type.should.equal('AuthorizeAction');
  });
});
