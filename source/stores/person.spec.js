import chai from 'chai';
import promised from 'chai-as-promised';

import { PersonStore } from './person';
import { Person } from '../models/person';

chai.should();
chai.use(promised);

/**
 * @test {PersonStore}
 */
describe('Person Store', () => {
  /**
   * @test {PersonStore#fetch}
   */
  it('should fetch a person by ID', () => {
    let store = new PersonStore();

    return store.fetch(null).should.eventually.satisfy((person) => {
      return person.should.be.an.instanceof(Person);
    });
  });
});
