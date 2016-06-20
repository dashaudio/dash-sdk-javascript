import { TrackEvent } from './track';
import { EventStatus } from '../status';

/**
 * Track Download denotes that a track was downloaded to a client app by a user. Uses schema.org's
 * [DownloadAction](https://schema.org/DownloadAction) *The act of downloading an object*.
 * @todo Include error state information option
 */
export class TrackDownloadEvent extends TrackEvent {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "DownloadAction",
      "@context": "https://schema.org",

      actionStatus: EventStatus.Completed,
      agent: this.agent(),
      instrument: this.instrument(),
      location: this.location(),
      object: super.track(),
      startTime: this.now()
    }
  }
}
