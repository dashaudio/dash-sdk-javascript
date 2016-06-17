import { User } from '../models/user';

/**
 * User Store
 */
export class UserStore {
  /**
   * Fetch a user by ID
   * @param {String} id User's unique ID
   * @return {Promise<User>} A promise which resolves to a User, if found
   */
  fetch(id) {
    return Promise.resolve(new User());
  }
}
