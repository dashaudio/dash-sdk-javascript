import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * App Foreground denotes that a client app moved into the foreground. Uses schema.org's
 * [ResumeAction](https://schema.org/ResumeAction) *The act of resuming a device or application
 * which was formerly paused (e.g. resume music playback or resume a timer)*.
 * @see {@link AppBackgroundEvent}
 */
export class AppForegroundEvent extends Event {
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
      object: this.instrument(),
      startTime: this.now()
    }
  }
}
