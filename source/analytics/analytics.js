import config from '../config.json';
import 'isomorphic-fetch';

/*
Analytics enables requesting of analytic data.
*/
export class Analytics {
  get endpoint() {
    return config.endpoints.analytics;
  }

  fetchSomething(done) {
    fetch('https://dashaudio.co').then((result) => {
      done();
    });
  }
}
