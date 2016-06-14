import config from '../config.json';

export class Analytics {
  get endpoint() {
    return config.endpoints.analytics;
  }
}
