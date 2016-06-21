import { Person } from '../models/person';

/**
 * Person Store
 */
export class PersonStore {
  /**
   * Fetch a person by ID
   * @param {String} id Person's unique ID
   * @return {Promise<User>} A promise which resolves to a User, if found
   * @todo Connect this to a backend (probably Auth0 for now)
   */
  fetch(id) {
    return Promise.resolve(new Person());
  }
}
