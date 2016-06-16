import { Endpoint } from '../endpoint';
import config from '../../config.json';

/**
 * Plays analytics endpoint
 */
export class PlaysEndpoint extends Endpoint {
  constructor(domain) {
    super();
    this.domain = domain || config.domains.analytics;
  }

  fetch() {
    return `${this.domain}/listeners/count`;
  }
}
