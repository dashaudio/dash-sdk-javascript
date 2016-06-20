import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * App Close denotes that a client was closed by its user. Uses schema.org's
 * [DeactivateAction](https://schema.org/DeactivateAction) *The act of stopping or deactivating a
 * device or application (e.g. stopping a timer or turning off a flashlight).*.
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
      "@context": "http://schema.org",

      actionStatus: EventStatus.Completed,
      agent: super.agent(),
      instrument: super.instrument(),
      location: super.location(),
      object: super.instrument(),
      startTime: super.now()
    }
  }
}
