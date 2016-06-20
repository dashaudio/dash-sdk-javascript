import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * Link View denotes that a web link was viewed by a user. Uses schema.org's
 * [ViewAction](https://schema.org/ViewAction) *The act of consuming static visual content*.
 */
export class LinkViewEvent extends Event {
  /**
   * Create a new Link View Event for a given URL
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
      "@type": "ViewAction",
      "@context": "http://schema.org",

      actionStatus: EventStatus.Completed,
      agent: super.agent(),
      instrument: super.instrument(),
      location: super.location(),
      object: this.url,
      startTime: super.now()
    }
  }
}
