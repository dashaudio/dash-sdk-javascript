import { PlaylistEvent } from './playlist';
import { EventStatus } from '../status';

/**
 * Playlist Create denotes that a user created a new playlist. Uses schema.org's
 * [CreateAction](https://schema.org/CreateAction) *The act of deliberately
 * creating/producing/generating/building a result out of the agent*.
 *
 * @example // Create a basic event
 * let event = new PlaylistCreateEvent();
 *
 * @example // Override a parameter
 * let event = new PlaylistCreateEvent({ location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new PlaylistCreateEvent();
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 *
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
