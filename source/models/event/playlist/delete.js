import { PlaylistEvent } from './playlist';
import { EventStatus } from '../status';

/**
 * Playlist Delete denotes that a user deleted an existing playlist. Uses schema.org's
 * [DeleteAction](https://schema.org/DeleteAction) *The act of editing a recipient by removing one
 * of its objects.*.
 *
 * @example // Create a basic event
 * let event = new PlaylistDeleteEvent();
 *
 * @example // Override a parameter
 * let event = new PlaylistDeleteEvent({ location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new PlaylistDeleteEvent();
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 *
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
      "@context": "https://schema.org",

      actionStatus: EventStatus.Completed,
      agent: this.person,
      instrument: this.application,
      location: this.location,
      object: {
        '@type': 'MusicPlaylist',
        '@context': 'https://schema.org',
        '@id': this.playlist.id
      },
      startTime: this.time
    }
  }
}
