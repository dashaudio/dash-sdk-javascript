import chai from 'chai';
import { NotificationReceiveEvent } from './receive';

/**
 * @test {NotificationReceiveEvent}
 */
describe('Notification Receive Event', () => {
  it('should exist', () => {
    NotificationReceiveEvent.should.not.be.undefined;
  });

  /**
   * @test {NotificationReceiveEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new NotificationReceiveEvent();
    let type = event.build()['@type'];
    type.should.equal('ReceiveAction');
  });
});
