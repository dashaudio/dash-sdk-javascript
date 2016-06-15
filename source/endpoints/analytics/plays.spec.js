import { expect } from 'chai';
import PlaysEndpoint from './plays';

describe('Analytics Plays Endpoint', () => {
  it('should return fetch URL', () => {
    let plays = new PlaysEndpoint('http://foo.bar');
    expect(plays.fetch()).to.contain('foo');
  });
});
