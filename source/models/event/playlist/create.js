import { PlaylistEvent } from './playlist';
import { EventStatus } from '../status';

/**
 * Playlist Create denotes that a user created a new playlist. Uses schema.org's
 * [CreateAction](https://schema.org/CreateAction) *The act of deliberately
 * creating/producing/generating/building a result out of the agent*.
 * @see {@link PlaylistDeleteEvent}
 */
export class PlaylistCreateEvent extends PlaylistEvent {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "CreateAction",
      "@context": "https://schema.org",

      actionStatus: EventStatus.Completed,
      agent: this.person,
      instrument: this.application,
      location: this.location,
      object: super.playlist(),
      startTime: this.time
    }
  }
}
