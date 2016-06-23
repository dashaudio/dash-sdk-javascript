import chai from 'chai';
import { TrackPositionEvent } from './position';

/**
 * @test {TrackPositionEvent}
 */
describe('Track Position Event', () => {
  it('should exist', () => {
    TrackPositionEvent.should.not.be.undefined;
  });

  /**
   * @test {TrackPositionEvent#target}
   */
  it('return a valid target string', () => {
    let event = new TrackPositionEvent({ id: 12345 }, 123);
    event.target().should.equal('#t=123');
  });

  /**
   * @test {TrackPositionEvent#constructor}
   */
  it('should fail to construct without a Track', () => {
    (() => new TrackPositionEvent()).should.throw(Error);
  });

  /**
   * @test {TrackPositionEvent#constructor}
   */
  it('should fail to construct without a position', () => {
    (() => new TrackPositionEvent({})).should.throw(Error);
  });
});
