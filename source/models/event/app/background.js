import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * App Background denotes that a client app moved into the background. Uses schema.org's
 * [ResumeAction](https://schema.org/ResumeAction) *The act of resuming a device or application
 * which was formerly paused (e.g. resume music playback or resume a timer).*.
 * @see {@link AppForegroundEvent}
 */
export class AppBackgroundEvent extends Event {
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
      object: super.instrument(),
      startTime: super.now()
    }
  }
}
