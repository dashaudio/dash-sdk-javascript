import { expect } from 'chai';
import { PlaysAnalytic } from './plays';

let mockFetch = function() {
  return Promise.resolve({/*data*/});
};

/**
* @test {PlaysAnalytic}
*/
describe('Plays Analytic', () => {

  /**
  * @test {PlaysAnalytic#fetchAll}
  */
  it('should fetch', (done) => {
    let plays = new PlaysAnalytic({ fetch: mockFetch });
    plays.fetchAll(() => {
      done();
    });
  });
});
