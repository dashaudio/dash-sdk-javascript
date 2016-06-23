import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * Link View denotes that a web link was viewed by a user. Uses schema.org's
 * [ViewAction](https://schema.org/ViewAction) *The act of consuming static visual content*.
 *
 * @example // Create a basic event
 * let event = new LinkViewEvent();
 *
 * @example // Override a parameter
 * let event = new LinkViewEvent({ location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new LinkViewEvent();
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 */
export class LinkViewEvent extends Event {
  /**
   * Create a new Link View event for a given URL
   * @param  {String} url The content's URL
   */
  constructor(url) {
    if (!url) throw new Error('LinkViewEvent constructor requires a URL parameter');
    super();
    this.url = url;
  }

  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      '@type': 'ViewAction',
      '@context': 'https://schema.org',

      actionStatus: EventStatus.Completed,
      agent: this.person,
      instrument: this.application,
      location: this.location,
      object: this.url,
      startTime: this.time
    }
  }
}
