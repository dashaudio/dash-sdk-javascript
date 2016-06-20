import chai from 'chai';
import { AppOpenEvent } from './open';

/**
 * @test {AppOpenEvent}
 */
describe('App Open Event', () => {
  it('should exist', () => {
    AppOpenEvent.should.not.be.undefined;
  });

  /**
   * @test {AppOpenEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new AppOpenEvent();
    let type = event.build()['@type'];
    type.should.equal('ActivateAction');
  });
});
