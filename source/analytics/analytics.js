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
    console.log('fetching something');
    fetch('https://dashaudio.co').then((result) => {
      console.log(result.body);
      done();
    });
  }
}
