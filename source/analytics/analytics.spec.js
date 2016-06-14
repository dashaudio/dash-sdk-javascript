import { expect } from 'chai';
import { Analytics } from './analytics';

describe('Analytics', () => {
  it('should return its endpoint', () => {
    let analytics = new Analytics();
    expect(analytics.endpoint).to.be.a.string;
  });
});
