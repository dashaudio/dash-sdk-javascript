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
    let event = new NotificationReceiveEvent({ id: 12345 });
    let type = event.build()['@type'];
    type.should.equal('ReceiveAction');
  });

  /**
   * @test {NotificationReceiveEvent#constructor}
   */
  it('should fail to construct without a notification', () => {
    (() => new NotificationReceiveEvent()).should.throw(Error);
  });

  /**
   * @test {NotificationReceiveEvent#build}
   */
  it('should contain notification ID in its dictionary', () => {
    let event = new NotificationReceiveEvent({ id: 12345 });
    let dictionary = event.build();
    dictionary.object['@id'].should.equal(12345);
  });
});
