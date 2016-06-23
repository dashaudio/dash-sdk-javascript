import chai from 'chai';
import { TrackPauseEvent } from './pause';

/**
 * @test {TrackPauseEvent}
 */
describe('Track Pause Event', () => {
  it('should exist', () => {
    TrackPauseEvent.should.not.be.undefined;
  });

  /**
   * @test {TrackPauseEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new TrackPauseEvent({ id: 12345 }, 123);
    let type = event.build()['@type'];
    type.should.equal('SuspendAction');
  });

  /**
   * @test {TrackPauseEvent#constructor}
   */
  it('should fail to construct without a Track', () => {
    (() => new TrackPauseEvent()).should.throw(Error);
  });

  /**
   * @test {TrackPauseEvent#build}
   */
  it('should contain the track ID in its dictionary', () => {
    let event = new TrackPauseEvent({ id: 12345 }, 123);
    let dictionary = event.build();
    dictionary.object['@id'].should.equal(12345);
  });

  /**
   * @test {TrackPauseEvent#build}
   */
  it('should contain the track position in its dictionary', () => {
    let event = new TrackPauseEvent({ id: 12345 }, 123);
    let dictionary = event.build();
    dictionary.target.should.contain(123);
  });
});
