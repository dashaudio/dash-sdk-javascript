import { expect } from 'chai';
import Auth from './auth';

describe('Auth', () => {
  it('should exist', () => {
    let auth = new Auth();
    expect(auth).not.to.be.null;
  });
});
