import { TrackPositionEvent } from './position';
import { EventStatus } from '../status';

/**
 * Track Play denotes that a track was played on a client app by a user. Uses schema.org's
 * [ResumeAction](https://schema.org/ResumeAction) *The act of resuming a device or application
 * which was formerly paused (e.g. resume music playback or resume a timer).*.
 *
 * @example // Create a basic event
 * let event = new TrackPlayEvent(track, position);
 *
 * @example // Override a parameter
 * let event = new TrackPlayEvent(track, position, { location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new TrackPlayEvent(track, position);
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 */
export class TrackPlayEvent extends TrackPositionEvent {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "ResumeAction",
      "@context": "https://schema.org",

      actionStatus: EventStatus.Completed,
      agent: this.person,
      instrument: this.application,
      location: this.location,
      object: super.track(),
      startTime: this.time,
      target: super.target()
    }
  }
}
