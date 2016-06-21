import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * App Foreground denotes that a client app moved into the foreground. Uses schema.org's
 * [ResumeAction](https://schema.org/ResumeAction) *The act of resuming a device or application
 * which was formerly paused (e.g. resume music playback or resume a timer)*.
 *
 * @example // Create a basic event
 * let event = new AppForegroundEvent();
 *
 * @example // Override a parameter
 * let event = new AppForegroundEvent({ location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new AppForegroundEvent();
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 *
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
      agent: this.person,
      instrument: this.application,
      location: this.location,
      object: this.application,
      startTime: this.time
    }
  }
}
