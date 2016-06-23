import Event from '../event';
import EventStatus from '../status';

/**
 * User Unregister denotes that a user has registered with us.
 * @todo Find an appropriate schema.org representation for this event
 *
 * @example // Create a basic event
 * let event = new UserUnregisterEvent();
 *
 * @example // Override a parameter
 * let event = new UserUnregisterEvent({ location: '40.748441,-73.985664' })
 *
 * @example // Save the event to our logging backend
 * let event = new UserUnregisterEvent();
 * let store = new LogStore();
 * store.save(event.build()).then(() => { ... });
 *
 * @see {@link UserRegisterEvent}
 */
export default class UserUnregisterEvent extends Event {

}
