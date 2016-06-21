import { TrackPositionEvent } from './position';
import { EventStatus } from '../status';

/**
 * Track Pause denotes that a track was paused on a client app by a user. Uses schema.org's
 * [SuspendAction](https://schema.org/SuspendAction) *The act of momentarily pausing a device or
 * application (e.g. pause music playback or pause a timer)*.
 *
 * @example // Create a basic event
 * let event = new TrackPauseEvent(track, position);
 *
 * @example // Override a parameter
 * let event = new TrackPauseEvent(track, position, { location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new TrackPauseEvent(track, position);
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 */
export class TrackPauseEvent extends TrackPositionEvent {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "SuspendAction",
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
