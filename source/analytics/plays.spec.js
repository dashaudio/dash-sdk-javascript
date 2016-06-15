import { expect } from 'chai';
import Plays from './plays';

let mockFetch = function() {
  return Promise.resolve({/*data*/});
};

describe('Analytics Plays', () => {
  it('should fetch', (done) => {
    let plays = new Plays({ fetch: mockFetch });
    plays.fetchAll(() => {
      done();
    });
  });
});
