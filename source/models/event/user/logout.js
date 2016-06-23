import Event from '../event';
import EventStatus from '../status';

/**
 * User Logout denotes that a user has logged out.
 *
 * @example // Create a basic event
 * let event = new UserLogoutEvent();
 *
 * @example // Override a parameter
 * let event = new UserLogoutEvent({ location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new UserLogoutEvent();
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 *
 * @see {@link UserLoginEvent}
 * @todo Find an appropriate schema.org representation for this event
 */
export default class UserLogoutEvent extends Event {

}
