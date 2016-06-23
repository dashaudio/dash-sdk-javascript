import Event from '../event';
import EventStatus from '../status';

/**
 * User Login denotes that a user has logged in. Uses schema.org's
 * [AuthorizeAction](https://schema.org/AuthorizeAction) *The act of
 * manipulating/administering/supervising/controlling one or more objects*.
 *
 * @example // Create a basic event
 * let event = new UserLoginEvent();
 *
 * @example // Override a parameter
 * let event = new UserLoginEvent({ location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new UserLoginEvent();
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 *
 * @see {@link UserLogoutEvent}
 */
export default class UserLoginEvent extends Event {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "AuthorizeAction",
      "@context": "https://schema.org",

      actionStatus: EventStatus.Completed,
      agent: this.person,
      instrument: this.application,
      location: this.location,
      startTime: this.time
    }
  }
}
