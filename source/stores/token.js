import Store from './store';
import decode from 'jwt-decode';

/**
 * Token Store
 */
export default class TokenStore extends Store {
  /**
   * Link store's JWT token with the given JWT token
   * @param {String} token A JWT token from a secondary provider to be linked
   * @return {Promise<Object>}
   */
  linkToken(token) {
    let id = decode(this.token).sub;
    let url = `https://dash.eu.auth0.com/api/v2/users/${id}/identities`;

    let request = {
      method: 'POST', body: JSON.stringify({ link_with: token }), headers: this.headers()
    };

    return this.fetch(url, request)
      .then(this.validateResponse)
      .then(this.parseResponse);
  }
}
