import { Store } from './store';
import { Person } from '../models/person';

import decode from 'jwt-decode';

/**
 * Person Store
 */
export class PersonStore extends Store {
  /**
   * Fetch all users.
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
      })));
  }

  /**
   * Fetch a person by ID
   * @param {String} id Person's unique ID
   * @return {Promise<User>} A promise which resolves to a User, if found
   * @todo Convert this to actually work with a user ID, not a token; token is provided by store
   */
  fetchByToken(token) {
    let url = 'https://dash.eu.auth0.com/tokeninfo';
    let body = {
      id_token: token
    };
    let config = {
      method: 'POST', cache: false, body: JSON.stringify(body), headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.fetch(url, config)
      .then((r) => r.json())
      .then((o) => new Person({
        id: o.user_id, email: o.email, alternateName: o.nickname, identities: o.identities
      }));
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

  /**
   * Link current identity with the given identity
   * @todo What to return here?
   * @todo Move out to a separate TokenStore?
   */
  linkTokens(token1, token2) {
    let id = decode(token1).sub;
    let url = `https://dash.eu.auth0.com/api/v2/users/${id}/identities`;
    let headers = {
      'Authorization': `Bearer ${token1}`,
      'Content-Type': 'application/json'
    };
    let body = {
      link_with: token2
    };
    let config = {
      method: 'POST', body: JSON.stringify(body), headers
    };
    return this.fetch(url, config)
      .then((r) => r.json());
  }
}
