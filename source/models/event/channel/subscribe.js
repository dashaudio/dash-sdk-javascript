import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * Channel Subscribe denotes that a user subscribed to notifications for a channel. Uses
 * schema.org's [SubscribeAction](https://schema.org/SubscribeAction) *The act of forming a personal
 * connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed
 * to*.
 */
export class ChannelSubscribeEvent extends Event {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "SubscribeAction",
      "@context": "http://schema.org",

      actionStatus: EventStatus.Completed,
      agent: super.agent(),
      instrument: super.instrument(),
      location: super.location(),
      // object: // TODO: Representation of a channel
      startTime: super.now()
    }
  }
}
