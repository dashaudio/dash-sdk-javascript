import { Store } from './store';
import decode from 'jwt-decode';

/**
 * Token Store
 */
export class TokenStore extends Store {
  /**
   * Link current identity with the given identity
   * @param {String} [primary] A JWT token; if not provided the store's token is used
   * @param {String} secondary A JWT token
   * @todo What to return here?
   * @todo Move out to a separate TokenStore?
   */
  linkTokens(primary, secondary) {
    primary = primary || this.token;
    let id = decode(primary).sub;

    let url = `https://dash.eu.auth0.com/api/v2/users/${id}/identities`;
    let headers = {
      'Authorization': `Bearer ${primary}`,
      'Content-Type': 'application/json'
    };
    let body = {
      link_with: secondary
    };
    let config = {
      method: 'POST', body: JSON.stringify(body), headers
    };
    return this.fetch(url, config)
      .then((r) => r.json());
  }
}
