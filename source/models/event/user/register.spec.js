import chai from 'chai';
import UserRegisterEvent from './register';

/**
 * @test {UserRegisterEvent}
 */
describe('User Register Event', () => {
  it('should exist', () => {
    UserRegisterEvent.should.not.be.undefined;
  });

  /**
   * @test {UserRegisterEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new UserRegisterEvent();
    let type = event.build()['@type'];
    type.should.equal('RegisterAction');
  });
});
