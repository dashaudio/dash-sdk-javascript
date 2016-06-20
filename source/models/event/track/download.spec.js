import chai from 'chai';
import { TrackDownloadEvent } from './download';

/**
 * @test {TrackDownloadEvent}
 */
describe('Track Download Event', () => {
  it('should exist', () => {
    TrackDownloadEvent.should.not.be.undefined;
  });

  /**
   * @test {TrackDownloadEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new TrackDownloadEvent({ id: 12345 });
    let type = event.build()['@type'];
    type.should.equal('DownloadAction');
  });

  /**
   * @test {PlaylistCreateEvent#constructor}
   */
  it('should fail to construct without a Track', () => {
    (() => new TrackDownloadEvent()).should.throw(Error);
  });

  /**
   * @test {PlaylistDeleteEvent#build}
   */
  it('should contain the track ID in its dictionary', () => {
    let event = new TrackDownloadEvent({ id: 12345 });
    let dictionary = event.build();
    dictionary.object['@id'].should.equal(12345);
  });
});
