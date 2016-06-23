import chai from 'chai';
import { TrackSaveEvent } from './save';

/**
 * @test {TrackSaveEvent}
 */
describe('Track Save Event', () => {
  it('should exist', () => {
    TrackSaveEvent.should.not.be.undefined;
  });

  /**
   * @test {TrackSaveEvent#build}
   */
  it('should build its dictionary', () => {
    let track = { id: 12345, playlist: { id: 67890 } };
    let event = new TrackSaveEvent(track);
    let type = event.build()['@type'];
    type.should.equal('AddAction');
  });

  /**
   * @test {TrackSaveEvent#constructor}
   */
  it('should fail to construct without a Track', () => {
    (() => new TrackSaveEvent()).should.throw(Error);
  });

  /**
   * @test {TrackSaveEvent#build}
   */
  it('should contain the track ID in its dictionary', () => {
    let track = { id: 12345, playlist: { id: 67890 } };
    let event = new TrackSaveEvent(track);
    let dictionary = event.build();
    dictionary.object['@id'].should.equal(12345);
  });

  /**
   * @test {TrackSaveEvent#build}
   */
  it('should contain the playlist ID in its dictionary', () => {
    let track = { id: 12345, playlist: { id: 67890 } };
    let event = new TrackSaveEvent(track);
    let dictionary = event.build();
    dictionary.targetCollection['@id'].should.equal(67890);
  });
});
