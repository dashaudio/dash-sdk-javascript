import chai from 'chai';
import { TrackRemoveEvent } from './remove';

/**
 * @test {TrackRemoveEvent}
 */
describe('Track Remove Event', () => {
  it('should exist', () => {
    TrackRemoveEvent.should.not.be.undefined;
  });

  /**
   * @test {TrackRemoveEvent#build}
   */
  it('should build its dictionary', () => {
    let track = { id: 12345, playlist: { id: 67890 } };
    let event = new TrackRemoveEvent(track);
    let type = event.build()['@type'];
    type.should.equal('DeleteAction');
  });

  /**
   * @test {TrackRemoveEvent#constructor}
   */
  it('should fail to construct without a Track', () => {
    (() => new TrackRemoveEvent()).should.throw(Error);
  });

  /**
   * @test {TrackRemoveEvent#build}
   */
  it('should contain the track ID in its dictionary', () => {
    let track = { id: 12345, playlist: { id: 67890 } };
    let event = new TrackRemoveEvent(track);
    let dictionary = event.build();
    dictionary.object['@id'].should.equal(12345);
  });

  /**
   * @test {TrackRemoveEvent#build}
   */
  it('should contain the playlist ID in its dictionary', () => {
    let track = { id: 12345, playlist: { id: 67890 } };
    let event = new TrackRemoveEvent(track);
    let dictionary = event.build();
    dictionary.targetCollection['@id'].should.equal(67890);
  });
});
