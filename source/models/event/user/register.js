import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * User Register denotes that a user has registered with us. Uses schema.org's
 * [RegisterAction](https://schema.org/RegisterAction) *The act of registering to be a user of a
 * service, product or web page*.
 * @see {@link UserUnregisterEvent}
 */
export class UserRegisterEvent extends Event {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "RegisterAction",
      "@context": "https://schema.org",

      actionStatus: EventStatus.Completed,
      agent: this.person,
      instrument: this.application,
      location: this.location,
      startTime: this.time
    }
  }
}
