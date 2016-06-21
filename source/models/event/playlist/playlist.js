import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * Playlist event abstract base class.
 * @abstract
 * @see {@link PlaylistCreateEvent}
 * @see {@link PlaylistDeleteEvent}
 */
export class PlaylistEvent extends Event {
  /**
   * Create a new Playlist event, with the given playlist.
   * @param  {Playlist} playlist The playlist that was acted on
   */
  constructor(playlist, overrides) {
    if (!playlist) throw new Error('PlaylistEvent constructor requires a playlist parameter');
    super(overrides);
    this.playlist = playlist;
  }

  /**
   * Build a dictionary for this event.
   * @abstract
   */
  build() {
    throw new Error('PlaylistEvent build() method must be overridden.');
  }

  /**
   * Generate a playlist description
   * @return {Object} The 'MusicPlaylist' schema
   */
  playlist() {
    return {
      '@type': 'MusicPlaylist',
      '@context': 'https://schema.org',
      '@id': this.playlist.id
    };
  }
}
