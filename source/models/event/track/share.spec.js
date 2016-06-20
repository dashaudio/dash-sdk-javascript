import chai from 'chai';
import { TrackShareEvent } from './share';

/**
 * @test {TrackShareEvent}
 */
describe('Track Share Event', () => {
  it('should exist', () => {
    TrackShareEvent.should.not.be.undefined;
  });

  /**
   * @test {TrackShareEvent#build}
   */
  it('should build its dictionary', () => {
    let track = { id: 12345, playlist: { id: 67890 } };
    let event = new TrackShareEvent(track);
    let type = event.build()['@type'];
    type.should.equal('ShareAction');
  });

  /**
   * @test {TrackShareEvent#constructor}
   */
  it('should fail to construct without a Track', () => {
    (() => new TrackShareEvent()).should.throw(Error);
  });

  /**
   * @test {TrackPlayEvent#build}
   */
  it('should contain the track ID in its dictionary', () => {
    let track = { id: 12345, playlist: { id: 67890 } };
    let event = new TrackShareEvent(track);
    let dictionary = event.build();
    dictionary.object['@id'].should.equal(12345);
  });
});
