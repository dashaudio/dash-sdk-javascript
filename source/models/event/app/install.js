import { Event } from '../event';
import { EventStatus } from '../status';

/**
 * App Install denotes that a client app was installed by a user. Uses schema.org's
 * [InstallAction](https://schema.org/InstallAction) *The act of installing an application*.
 * @see {@link AppBackgroundEvent}
 */
export class AppInstallEvent extends Event {
  /**
   * Build a dictionary for this event.
   * @return {Object} The dictionary
   */
  build() {
    return {
      "@type": "InstallAction",
      "@context": "http://schema.org",

      actionStatus: EventStatus.Completed,
      agent: super.agent(),
      object: super.instrument(),
      location: super.location(),
      startTime: super.now()
    }
  }
}
