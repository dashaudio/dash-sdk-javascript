import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * Track event abstract base class.
 * @abstract
 */
export class TrackEvent extends Event {
  /**
   * Create a new Track event, with the given track.
   * @param  {Track} track The track that was acted on
   */
  constructor(track) {
    if (!track) throw new Error('TrackEvent constructor requires a playlist parameter');
    super();
    this.track = track;
  }

  /**
   * Build a dictionary for this event.
   * @abstract
   */
  build() {
    throw new Error('TrackEvent build() method must be overridden.');
  }

  /**
   * Generate a track description
   * @return {Object} The 'MusicPlaylist' schema
   */
  track() {
    return {
      '@type': 'AudioObject',
      '@context': 'https://schema.org',
      '@id': this.track.id
    };
  }
}
