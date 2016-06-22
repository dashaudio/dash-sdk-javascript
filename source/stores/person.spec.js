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
  xit('should fetch a person by token', () => {
    let token = '...';
    let store = new PersonStore();

    return store.fetchByToken(token).should.eventually.satisfy((person) => {
      console.log(person);
      return person.should.be.an.instanceof(Person);
    });
  });

  xit('should link tokens', () => {
    let token1 = '...';
    let token2 = '...';
    let store = new PersonStore();

    return store.linkTokens(token1, token2).should.eventually.satisfy((res) => {
      console.log(res);
      return res.should.not.be.undefined;
    });
  });
});
