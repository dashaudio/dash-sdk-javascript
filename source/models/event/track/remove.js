import { TrackEvent } from './track';
import { EventStatus } from '../status';

/**
 * Track Remove denotes that a track was removed from a playlist by a user. Uses schema.org's
 * [DeleteAction](https://schema.org/DeleteAction) *The act of editing a recipient by removing one
 * of its objects*.
 */
export class TrackRemoveEvent extends TrackEvent {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "DeleteAction",
      "@context": "https://schema.org",

      actionStatus: EventStatus.Completed,
      agent: this.person,
      instrument: this.application,
      location: this.location,
      object: super.track(),
      targetCollection: super.playlist(),
      startTime: this.time
    }
  }
}
