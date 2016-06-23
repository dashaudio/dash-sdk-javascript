import chai from 'chai';
import AppForegroundEvent from './foreground';

/**
 * @test {AppForegroundEvent}
 */
describe('App Foreground Event', () => {
  it('should exist', () => {
    AppForegroundEvent.should.not.be.undefined;
  });

  /**
   * @test {AppForegroundEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new AppForegroundEvent();
    let type = event.build()['@type'];
    type.should.equal('ResumeAction');
  });
});
