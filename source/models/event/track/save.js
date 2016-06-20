import { TrackEvent } from './track';
import { EventStatus } from '../status';

/**
 * Track Remove denotes that a track was added to a playlist by a user. Uses schema.org's
 * [AddAction](https://schema.org/AddAction) *The act of editing by adding an object to a
 * collection*.
 */
export class TrackSaveEvent extends TrackEvent {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "AddAction",
      "@context": "http://schema.org",

      actionStatus: EventStatus.Completed,
      agent: super.agent(),
      instrument: super.instrument(),
      location: super.location(),
      object: super.track(),
      targetCollection: super.playlist(),
      startTime: super.now()
    }
  }
}
