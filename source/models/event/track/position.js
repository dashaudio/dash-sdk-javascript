import TrackEvent from './track';
import EventStatus from '../status';

/**
 * Track Position event abstract base class, for events where playback position must be supplied.
 * @abstract
 */
export default class TrackPositionEvent extends TrackEvent {
  /**
   * Create a new Track Position event, with the given track and playback position.
   * @param {Track} track The track that was acted on
   * @param {Number} position The current playback position in seconds
   */
  constructor(track, position) {
    if (!position) throw new Error('TrackPositionEvent requires a position parameter');
    super(track);
    this.position = position;
  }

  /**
   * Return track position formatted as a [Media Fragments URI](http://www.w3.org/TR/media-frags/)
   */
  target() {
    return `#t=${this.position}`;
  }
}
