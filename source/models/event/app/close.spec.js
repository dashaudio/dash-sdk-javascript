import chai from 'chai';
import { AppCloseEvent } from './close';

/**
 * @test {AppCloseEvent}
 */
describe('App Close Event', () => {
  it('should exist', () => {
    AppCloseEvent.should.not.be.undefined;
  });

  /**
   * @test {AppCloseEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new AppCloseEvent();
    let type = event.build()['@type'];
    type.should.equal('DeactivateAction');
  });
});
