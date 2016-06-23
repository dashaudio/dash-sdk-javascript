import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * Notification Receive denotes that a user received a notification. Uses schema.org's
 * [ReceiveAction](https://schema.org/ReceiveAction) *The act of physically/electronically taking
 * delivery of an object thathas been transferred from an origin to a destination. Reciprocal of
 * SendAction*.
 *
 * @example // Create a basic event
 * let event = new NotificationReceiveEvent();
 *
 * @example // Override a parameter
 * let event = new NotificationReceiveEvent({ location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new NotificationReceiveEvent();
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 */
export class NotificationReceiveEvent extends Event {
  /**
   * Create a new Notification Receive event for a given notification
   * @param  {Notification} notification The notification being acted on
   */
  constructor(notification) {
    if (!notification) {
      throw new Error('NotificationReceiveEvent constructor requires a notification parameter');
    }
    super();
    this.notification = notification;
  }

  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "ReceiveAction",
      "@context": "https://schema.org",

      actionStatus: EventStatus.Completed,
      agent: this.person,
      instrument: this.application,
      location: this.location,
      object: {
        '@type': 'Message',
        '@context': 'https://schema.org',
        '@id': this.notification.id
      },
      startTime: this.time
    }
  }
}
