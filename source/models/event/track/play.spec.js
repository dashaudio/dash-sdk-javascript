import chai from 'chai';
import { TrackPlayEvent } from './play';

/**
 * @test {TrackPlayEvent}
 */
describe('Track Play Event', () => {
  it('should exist', () => {
    TrackPlayEvent.should.not.be.undefined;
  });

  /**
   * @test {TrackPlayEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new TrackPlayEvent({ id: 12345 }, 123);
    let type = event.build()['@type'];
    type.should.equal('ResumeAction');
  });

  /**
   * @test {TrackPlayEvent#constructor}
   */
  it('should fail to construct without a Track', () => {
    (() => new TrackPlayEvent()).should.throw(Error);
  });

  /**
   * @test {TrackPlayEvent#build}
   */
  it('should contain the track ID in its dictionary', () => {
    let event = new TrackPlayEvent({ id: 12345 }, 123);
    let dictionary = event.build();
    dictionary.object['@id'].should.equal(12345);
  });

  /**
   * @test {TrackPlayEvent#build}
   */
  it('should contain the track position in its dictionary', () => {
    let event = new TrackPlayEvent({ id: 12345 }, 123);
    let dictionary = event.build();
    dictionary.target.should.contain(123);
  });
});
