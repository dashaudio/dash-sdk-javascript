import { TrackPositionEvent } from './position';
import { EventStatus } from '../status';

/**
 * Track Play denotes that a track was played on a client app by a user. Uses schema.org's
 * [ResumeAction](https://schema.org/ResumeAction) *The act of resuming a device or application
 * which was formerly paused (e.g. resume music playback or resume a timer).*.
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
      agent: this.agent(),
      instrument: this.instrument(),
      location: this.location(),
      object: super.track(),
      startTime: this.now(),
      target: super.target()
    }
  }
}
