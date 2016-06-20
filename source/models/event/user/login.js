import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * User Login denotes that a user has logged in. Uses schema.org's
 * [AuthorizeAction](https://schema.org/AuthorizeAction) *The act of
 * manipulating/administering/supervising/controlling one or more objects*.
 * @see {@link UserLogoutEvent}
 */
export class UserLoginEvent extends Event {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "AuthorizeAction",
      "@context": "https://schema.org",

      actionStatus: EventStatus.Completed,
      agent: this.agent(),
      instrument: this.instrument(),
      location: this.location(),
      startTime: this.now()
    }
  }
}
