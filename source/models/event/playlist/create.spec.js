import chai from 'chai';
import { PlaylistCreateEvent } from './create';

/**
 * @test {PlaylistCreateEvent}
 */
describe('Playlist Create Event', () => {
  it('should exist', () => {
    PlaylistCreateEvent.should.not.be.undefined;
  });

  /**
   * @test {PlaylistCreateEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new PlaylistCreateEvent({});
    let type = event.build()['@type'];
    type.should.equal('CreateAction');
  });

  /**
   * @test {PlaylistCreateEvent#constructor}
   */
  it('should fail to construct without a URL', () => {
    (() => new PlaylistCreateEvent()).should.throw(Error);
  });

  /**
   * @test {PlaylistDeleteEvent#build}
   */
  it('should contain the playlist ID in its dictionary', () => {
    let event = new PlaylistCreateEvent({ id: 12345 });
    let dictionary = event.build();
    dictionary.object['@id'].should.equal(12345);
  });
});
