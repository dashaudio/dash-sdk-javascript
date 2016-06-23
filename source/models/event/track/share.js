import { TrackEvent } from './track';
import { EventStatus } from '../status';

/**
 * Track Share denotes that a track was shared by a user. Uses schema.org's
 * [ShareAction](https://schema.org/ShareAction) *The act of distributing content to people for
 * their amusement or edification*.
 *
 * @example // Create a basic event
 * let event = new TrackShareEvent(track);
 *
 * @example // Override a parameter
 * let event = new TrackShareEvent(track, { location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new TrackShareEvent(track);
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 */
export class TrackShareEvent extends TrackEvent {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "ShareAction",
      "@context": "https://schema.org",

      actionStatus: EventStatus.Completed,
      agent: this.person,
      instrument: this.application,
      location: this.location,
      object: super.track(),
      startTime: this.time
    }
  }
}
