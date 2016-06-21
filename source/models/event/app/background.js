import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * App Background denotes that a client app moved into the background. Uses schema.org's
 * [ResumeAction](https://schema.org/ResumeAction) *The act of resuming a device or application
 * which was formerly paused (e.g. resume music playback or resume a timer)*.
 *
 * @example // Create a basic event
 * let event = new AppBackgroundEvent();
 *
 * @example // Override a parameter
 * let event = new AppBackgroundEvent({ location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new AppBackgroundEvent();
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 *
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
