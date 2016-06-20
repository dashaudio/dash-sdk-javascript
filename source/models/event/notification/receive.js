import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * Notification Receive denotes that a user received a notification. Uses schema.org's
 * [ReceiveAction](https://schema.org/ReceiveAction) *The act of physically/electronically taking
 * delivery of an object thathas been transferred from an origin to a destination. Reciprocal of
 * SendAction*.
 */
export class NotificationReceiveEvent extends Event {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "ReceiveAction",
      "@context": "http://schema.org",

      actionStatus: EventStatus.Completed,
      agent: super.agent(),
      instrument: super.instrument(),
      location: super.location(),
      // object: // TODO: Identifier of some sort for the notification?
      startTime: super.now()
    }
  }
}
