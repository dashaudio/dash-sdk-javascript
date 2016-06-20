import chai from 'chai';
import { AppBackgroundEvent } from './background';

/**
 * @test {AppBackgroundEvent}
 */
describe('App Background Event', () => {
  it('should exist', () => {
    AppBackgroundEvent.should.not.be.undefined;
  });

  /**
   * @test {AppBackgroundEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new AppBackgroundEvent();
    let type = event.build()['@type'];
    type.should.equal('SuspendAction');
  });
});
