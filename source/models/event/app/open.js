import { Event } from '../event';
import { EventStatus } from '../status';

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