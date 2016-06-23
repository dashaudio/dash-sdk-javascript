import Event from '../event';
import EventStatus from '../status';
import Person from '../../person';

/**
 * App Open denotes that a client app was opened by a user. Uses schema.org's
 * [ActivateAction](https://schema.org/ActivateAction) *The act of starting or activating a
 * device or application (e.g. starting a timer or turning on a flashlight)*.
 *
 * @example // Create a basic event
 * let event = new AppOpenEvent();
 *
 * @example // Override a parameter
 * let event = new AppOpenEvent({ location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new AppOpenEvent();
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 *
 * @see {@link AppCloseEvent}
 */
export default class AppOpenEvent extends Event {
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
