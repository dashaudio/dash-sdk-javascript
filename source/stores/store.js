import isofetch from 'isomorphic-fetch';

export class Store {
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
      'Authorization': `Bearer ${this.token}`
    }
  }
}
