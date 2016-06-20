import chai from 'chai';
import { merge } from './utils';

/**
 * @test {merge}
 */
describe('Merge', () => {
  it('should merge several parameters into a valid URL querystring', () => {
    let parameters = {
      foo: 'bar',
      baz: 123
    };

    merge(parameters).should.equal('foo=bar&baz=123');
  });
});
