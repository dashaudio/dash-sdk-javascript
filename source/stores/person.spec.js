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
  xit('should fetch all users', () => {
    let store = new PersonStore({ token: '' });
    return store.fetchAll().should.eventually.satisfy((persons) => {
      return persons[0].should.be.an.instanceof(Person);
    });
  });

  /**
   * @test {PersonStore#fetch}
   */
  xit('should fetch a person by token', () => {
    let token = '';
    let store = new PersonStore();

    return store.fetchByToken(token).should.eventually.satisfy((person) => {
      return person.should.be.an.instanceof(Person);
    });
  });

  xit('should link tokens', () => {
    let token1 = '...';
    let token2 = '...';
    let store = new PersonStore();

    return store.linkTokens(token1, token2).should.eventually.satisfy((res) => {
      return res.should.not.be.undefined;
    });
  });
});
