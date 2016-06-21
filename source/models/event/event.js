import { EventStatus } from './status';
import { Person } from '../person';
import { Application } from '../application';

/**
 * Base class for all analytic events. Our events model user actions within client apps, and are
 * based on enteties described by [schema.org](https://schema.org).
 * @todo Factor out some stuff here into utils, eg. to work out what app we are running as
 * @abstract
 */
export class Event {
  /**
   * Create a new event, with the specified parameter overrides
   * @param {Object} [overrides] Optional override parameters object
   * @example let event = TrackPlayEvent({ status: EventStatus.Failed });
   * @todo Type validation of these overrides
   * @abstract
   */
  constructor(overrides = {}) {
    this.status = overrides.status || EventStatus.Completed;
    this.application = overrides.application || Application.current();
    this.person = overrides.person || Person.current();
    this.location = overrides.location || ''; // TODO: Implement a Location.current()?
    this.time = overrides.time || (new Date()).toISOString();
  }

  /**
   * Build a dictionary for this event.
   * @abstract
   */
  build() {
    throw new Error('Event build() method must be overridden.');
  }
}
