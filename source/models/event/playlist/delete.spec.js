import chai from 'chai';
import PlaylistDeleteEvent from './delete';

/**
 * @test {PlaylistDeleteEvent}
 */
describe('Playlist Delete Event', () => {
  it('should exist', () => {
    PlaylistDeleteEvent.should.not.be.undefined;
  });

  /**
   * @test {PlaylistDeleteEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new PlaylistDeleteEvent({});
    let type = event.build()['@type'];
    type.should.equal('DeleteAction');
  });

  /**
   * @test {PlaylistDeleteEvent#constructor}
   */
  it('should fail to construct without a URL', () => {
    (() => new PlaylistDeleteEvent()).should.throw(Error);
  });

  /**
   * @test {PlaylistDeleteEvent#build}
   */
  it('should contain the playlist ID in its dictionary', () => {
    let event = new PlaylistDeleteEvent({ id: 12345 });
    let dictionary = event.build();
    dictionary.object['@id'].should.equal(12345);
  });
});
