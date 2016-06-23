import isofetch from 'isomorphic-fetch';

export default class Store {
  /**
   * @todo
   */
  constructor(params = {}) {
    this.fetch = params.fetch || isofetch;
    this.token = params.token;
  }

  /**
   * @todo
   */
  headers() {
    return {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    }
  }

  /**
   * Validate a response's status code
   * @param {Response} response The response object
   * @return {Response} The validated object
   * @throws
   */
  validateResponse(response) {
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Request failed with ${response.status} ${response.statusText}`);
    }

    return response;
  }

  /**
   * Parse a resonse's JSON content
   * @param {Response} response The response object
   * @return {Promise<Object>} A promise resolving to the parsed object
   */
  parseResponse(response) {
    return response.json();
  }
}
