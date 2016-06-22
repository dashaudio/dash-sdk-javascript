import { Store } from './store';
import { Person } from '../models/person';
import decode from 'jwt-decode';

/**
 * Person Store
 */
export class PersonStore extends Store {
  /**
   * Fetch a person by ID
   * @param {String} id Person's unique ID
   * @return {Promise<User>} A promise which resolves to a User, if found
   * @todo Connect this to a backend (probably Auth0 for now)
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
      .then((o) => new Person({ id: o.user_id, email: o.email, alternateName: o.nickname }));
  }

  /**
   * Link current identity with the given identity
   * @todo What to return here?
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
