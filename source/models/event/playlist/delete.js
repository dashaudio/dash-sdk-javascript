import { PlaylistEvent } from './playlist';
import { EventStatus } from '../status';

/**
 * Playlist Delete denotes that a user deleted an existing playlist. Uses schema.org's
 * [DeleteAction](https://schema.org/DeleteAction) *The act of editing a recipient by removing one
 * of its objects.*.
 * @see {@link PlaylistCreateEvent}
 */
export class PlaylistDeleteEvent extends PlaylistEvent {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "DeleteAction",
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
