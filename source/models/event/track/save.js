import { TrackEvent } from './track';
import { EventStatus } from '../status';

/**
 * Track Remove denotes that a track was added to a playlist by a user. Uses schema.org's
 * [AddAction](https://schema.org/AddAction) *The act of editing by adding an object to a
 * collection*.
 *
 * @example // Create a basic event
 * let event = new TrackSaveEvent(track);
 *
 * @example // Override a parameter
 * let event = new TrackSaveEvent(track, { location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new TrackSaveEvent(track);
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 */
export class TrackSaveEvent extends TrackEvent {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "AddAction",
      "@context": "https://schema.org",

      actionStatus: EventStatus.Completed,
      agent: this.person,
      instrument: this.application,
      location: this.location,
      object: super.track(),
      targetCollection: super.playlist(),
      startTime: this.time
    }
  }
}
