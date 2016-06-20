import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * Channel Subscribe denotes that a user subscribed to notifications for a channel. Uses
 * schema.org's [SubscribeAction](https://schema.org/SubscribeAction) *The act of forming a personal
 * connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed
 * to*.
 * @todo Find a schema.org representation to use for the channel
 */
export class ChannelSubscribeEvent extends Event {
  /**
   * Create a new Channel Subscribe event for a given channel
   * @param  {Channel} channel The channel being acted on
   */
  constructor(channel) {
    if (!channel) throw new Error('ChannelSubscribeEvent constructor requires a channel parameter');
    super();
    this.channel = channel;
  }

  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      '@type': 'SubscribeAction',
      '@context': 'https://schema.org',

      actionStatus: EventStatus.Completed,
      agent: this.agent(),
      instrument: this.instrument(),
      location: this.location(),
      object: {
        '@type': 'Channel',
        '@context': 'https://dashaudio.co',
        '@id': this.channel.id
      },
      startTime: this.now()
    }
  }
}
