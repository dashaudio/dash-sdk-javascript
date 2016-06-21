import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * App Install denotes that a client app was installed by a user. Uses schema.org's
 * [InstallAction](https://schema.org/InstallAction) *The act of installing an application*.
 *
 * @example // Create a basic event
 * let event = new AppInstallEvent();
 *
 * @example // Override a parameter
 * let event = new AppInstallEvent({ location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new AppInstallEvent();
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 *
 * @see {@link AppBackgroundEvent}
 */
export class AppInstallEvent extends Event {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "InstallAction",
      "@context": "https://schema.org",

      actionStatus: EventStatus.Completed,
      agent: this.person,
      object: this.application,
      location: this.location,
      startTime: this.time
    }
  }
}
