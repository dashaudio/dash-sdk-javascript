import { TrackEvent } from './track';
import { EventStatus } from '../status';

/**
 * Track Share denotes that a track was shared by a user. Uses schema.org's
 * [ShareAction](https://schema.org/ShareAction) *The act of distributing content to people for
 * their amusement or edification*.
 */
export class TrackShareEvent extends TrackEvent {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "ShareAction",
      "@context": "http://schema.org",

      actionStatus: EventStatus.Completed,
      agent: super.agent(),
      instrument: super.instrument(),
      location: super.location(),
      object: super.track(),
      startTime: super.now()
    }
  }
}
