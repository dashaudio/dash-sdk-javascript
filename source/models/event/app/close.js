import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * App Close denotes that a client was closed by its user. Uses schema.org's
 * [DeactivateAction](https://schema.org/DeactivateAction) *The act of stopping or deactivating a
 * device or application (e.g. stopping a timer or turning off a flashlight)*.
 *
 * @example // Create a basic event
 * let event = new AppCloseEvent();
 *
 * @example // Override a parameter
 * let event = new AppCloseEvent({ location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new AppCloseEvent();
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 *
 * @see {@link AppOpenEvent}
 */
export class AppCloseEvent extends Event {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "DeactivateAction",
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
