import { TrackEvent } from './track';
import { EventStatus } from '../status';

/**
 * Track Download denotes that a track was downloaded to a client app by a user. Uses schema.org's
 * [DownloadAction](https://schema.org/DownloadAction) *The act of downloading an object*.
 *
 * @example // Create a basic event
 * let event = new TrackDownloadEvent(track);
 *
 * @example // Override a parameter
 * let event = new TrackDownloadEvent(track, { location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new TrackDownloadEvent(track);
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 *
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
      agent: this.person,
      instrument: this.application,
      location: this.location,
      object: super.track(),
      startTime: this.time
    }
  }
}
