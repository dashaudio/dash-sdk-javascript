import { PlaysEndpoint } from '../endpoints/analytic/plays';
import fetch from 'isomorphic-fetch';

/**
 * Class for plays
 * @example
 * let plays = new dash.PlaysAnalytic();
 * plays.fetchAll((result) => console.log(result));

  */
export class PlaysAnalytic {

  /**
   * Create a new plays analytic
   * @param {Object} deps optional dependencies
   */
  constructor(deps) {
    this.fetch = (deps && deps.fetch) || fetch;
    this.endpoint = (deps && deps.endpoint) || new PlaysEndpoint();
  }

  /**
  * Fetch all play analytics
  * @param {Function} done callback function
  * @returns {Promise} a promise which resolves when done
  */
  fetchAll(done) {
      this.fetch(this.endpoint.fetch()).then((result) => {
        done(result);
      });
      // Do some more work on this. Should just return a promise!
  }

  /**
  * Some static function
  * @static
  */
  static foo() {
    // ...
  }
}
