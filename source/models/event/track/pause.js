import { TrackPositionEvent } from './position';
import { EventStatus } from '../status';

/**
 * Track Pause denotes that a track was paused on a client app by a user. Uses schema.org's
 * [SuspendAction](https://schema.org/SuspendAction) *The act of momentarily pausing a device or
 * application (e.g. pause music playback or pause a timer)*.
 */
export class TrackPauseEvent extends TrackPositionEvent {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "SuspendAction",
      "@context": "http://schema.org",

      actionStatus: EventStatus.Completed,
      agent: super.agent(),
      instrument: super.instrument(),
      location: super.location(),
      object: super.track(),
      startTime: super.now(),
      target: super.target()
    }
  }
}
