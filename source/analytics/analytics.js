import config from '../config.json';

/*
Analytics enables requesting of analytic data.
*/
export class Analytics {
  get endpoint() {
    return config.endpoints.analytics;
  }
}
