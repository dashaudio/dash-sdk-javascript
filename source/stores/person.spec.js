import chai from 'chai';
import promised from 'chai-as-promised';

import PersonStore from './person';
import Person from '../models/person';

import fixtures from './person.spec.fixtures.json';

chai.should();
chai.use(promised);

describe('Person Store', () => {
  /**
   * @test {PersonStore}
   */
  it('should exist', () => {
    PersonStore.should.not.be.undefined;
  });

  /**
   * @test {PersonStore#fetchAll}
   */
  xit('should fetch all users', () => {
    let token = fixtures.users.api.token;
    let store = new PersonStore({ token });

    return store.fetchAll().should.eventually.satisfy((persons) => {
      return persons[0].should.be.an.instanceof(Person);
    });
  });

  /**
   * @test {PersonStore#fetchById}
   */
  xit('should fetch a person by ID', () => {
    let token = fixtures.users.api.token;
    let store = new PersonStore({ token });
    let id = fixtures.users.client.id;

    return store.fetchById(id).should.eventually.satisfy((person) => {
      return person.id.should.equal(id);
    });
  });

  /**
   * @test {PersonStore#fetchByToken}
   * @note that the token argument on fetchByToken() is optional - the store already has a token
   */
  xit('should fetch a person by token', () => {
    let token = fixtures.users.client.token;
    let store = new PersonStore({ token: token });

    return store.fetchByToken().should.eventually.satisfy((person) => {
      return person.should.not.be.undefined;
      // Person should be whatever is defined in fixture...
    });
  });
});
