// # Plays Analytics Object

//
import PlaysEndpoint from '../endpoints/analytics/plays';
import fetch from 'isomorphic-fetch';

// Plays
export default class Plays {
  constructor(deps) {
    this.fetch = (deps && deps.fetch) || fetch;
    this.endpoint = (deps && deps.endpoint) || new PlaysEndpoint();
  }

  // ## Fetch All
  fetchAll(done) {
      this.fetch(this.endpoint.fetch()).then((result) => {
        done();
      });

  }
}
