import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * Playlist Create denotes that a user created a new playlist. Uses schema.org's
 * [CreateAction](https://schema.org/CreateAction) *The act of deliberately
 * creating/producing/generating/building a result out of the agent*.
 * @see {@link PlaylistDeleteEvent}
 */
export class PlaylistCreateEvent extends Event {
  /**
   * Create a new Playlist Create event, with the given playlist.
   * @param  {Playlist} playlist The playlist that was created
   */
  constructor(playlist) {
    if (!playlist) throw new Error('PlaylistCreateEvent constructor requires a playlist parameter');
    super();
    this.playlist = playlist;
  }

  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "CreateAction",
      "@context": "http://schema.org",

      actionStatus: EventStatus.Completed,
      agent: super.agent(),
      instrument: super.instrument(),
      location: super.location(),
      object: {
        '@type': 'MusicPlaylist',
        '@context': 'https://schema.org',
        '@id': this.playlist.id
      },
      startTime: super.now()
    }
  }
}
