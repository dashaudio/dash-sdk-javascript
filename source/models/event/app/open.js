import { Event } from '../event';
import { EventStatus } from '../status';
import { Person } from '../../person';

/**
 * App Open denotes that a client app was opened by a user. Uses schema.org's
 * [ActivateAction](https://schema.org/ActivateAction) *The act of starting or activating a
 * device or application (e.g. starting a timer or turning on a flashlight)*.
 * @see {@link AppCloseEvent}
 */
export class AppOpenEvent extends Event {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "ActivateAction",
      "@context": "https://schema.org",

      actionStatus: this.status,
      agent: this.person,
      instrument: this.application,
      location: this.location,
      object: this.application,
      startTime: this.time
    }
  }
}
