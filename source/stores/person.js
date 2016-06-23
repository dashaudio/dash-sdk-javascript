import { Store } from './store';
import { Person } from '../models/person';

import decode from 'jwt-decode';

/**
 * Person Store
 * @todo A lot more validation and error handling needed here!
 */
export class PersonStore extends Store {
  /**
   * Fetch all users
   * @return {Promise<Person[]>} Array of Person objects
   */
  fetchAll() {
    let url = 'https://dash.eu.auth0.com/api/v2/users';
    return this.fetch(url, { headers: this.headers() })
      .then((result) => result.json())
      .then((array) => array.map((item) => new Person({
        id: item.user_id,
        email: item.email,
        alternateName: item.nickname,
        identities: item.identities
      })))
      .catch((error) => {
        return Promise.reject(new Error(`PersonStore failed to fetchAll (${error})`));
      });
  }

  /**
   * Fetch a user by ID
   * @param {String} id Person's unique ID
   * @return {Promise<Person>} A promise which resolves to a User, if found
   */
  fetchById(id) {
    let url = `https://dash.eu.auth0.com/api/v2/users/${id}`;
    return this.fetch(url, { headers: this.headers() })
      .then(this.validateResponse)
      .then(this.parseResponse)
      .then((object) => {
        return new Person({
          id: object.user_id,
          email: object.email,
          alternateName: object.nickname,
          identities: object.identities
        });
      })
      .catch((error) => {
        return Promise.reject(new Error(`PersonStore failed to fetchById (${error})`));
      });
  }

  /**
   * Fetch a user by JWT token
   * @param {String} [token] A JWT token; if not provided the store's token is used
   * @return {Promise<Person>} A promise which resolves to a Person, if found
   */
  fetchByToken(token) {
    return this.fetchById(token ? decode(token).sub : decode(this.token).sub);
  }

  /**
   * Fetch the current user, as saved by the store. Browser only(?)
   * @todo More thought on this
   */
  fetchCurrent() {
    // ...
  }

  /**
   * Save person as the current user. Browser only(?)
   * @todo More thought on this
   */
  saveAsCurrent(person) {
    // ...
  }
}
