import { merge } from '../utils';
import config from '../../config.json';

/**
 * Plays analytics endpoint
 * @ignore
 * @example
 * let endpoint = new PlaysAnalyticEndpoint();
 * let url = endpoint.retrieve(new Date() - 86400000, new Date(), 'client');
 */
export class PlaysAnalyticEndpoint {
  /**
   * Create a new plays analytic endpoint
   * @param  {String} [domain] Override domain
   * @return {PlaysAnalyticEndpoint}
   */
  constructor(domain) {
    this.domain = domain || config.domains.analytics;
  }

  /**
   * Collection endpoint for the plays analytic
   * @param {Date} start Start date
   * @param {Date} end End date
   * @param {String} client Client identifier
   * @return {String} Endpoint URL
   */
  collection(start, end, client) {
    let startTime = (start && start.getTime()) || new Date();
    let endTime = (end && end.getTime()) || new Date();
    let clientString = client ? `&override=input.glob.body.query.filtered.filter.bool.must[2].term.object___publisher=http://dashaudio.co/Publisher/${client}` : '';

    return `${this.domain}/plays/count` +
      `?override=input.glob.body.query.filtered.filter.bool.must[1].range.startTime.gte=${startTime}` +
      `&override=input.glob.body.query.filtered.filter.bool.must[1].range.startTime.lte=${endTime}` +
      `&override=input.glob.body.aggs.plays.date_histogram.extended_bounds.min=${startTime}` +
      `&override=input.glob.body.aggs.plays.date_histogram.extended_bounds.max=${endTime}` +
      `${clientString}`;
  }
}
