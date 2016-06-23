import { PlaysAnalyticEndpoint } from '../endpoint/analytic/plays';
import isofetch from 'isomorphic-fetch';

/**
 * Class for plays
 * @example
 * let plays = new dash.PlaysAnalytic();
 * plays.fetchAll((result) => console.log(result));
 */
export class PlaysAnalytic {

  /**
   * Create a new plays analytic
   * @param {Function} [fetch] Override fetch
   * @param {PlaysAnalyticEndpoint} [endpoint] Override endpoint
   */
  constructor(fetch, endpoint) {
    this.fetch = fetch || isofetch;
    this.endpoint = endpoint || new PlaysAnalyticEndpoint();
  }

  /**
  * Fetch all play analytics
  * @returns {Promise} a promise which resolves when done
  */
  refresh() {
    let start = new Date();
    let end = new Date();
    let client = 'politiken';

    return this.fetch(this.endpoint.collection(start, end, client))
      .then((res) => res.json())
      .then((json) => json.buckets.map((bucket) => {
        return {
          timestamp: bucket.key,
          value: bucket.doc_count
        }
      }));
  }
}
