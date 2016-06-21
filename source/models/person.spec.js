import chai from 'chai';
import promised from 'chai-as-promised';
import { Person } from './person';

chai.should();

describe('Person', () => {
  /**
   * @test {Person}
   */
  it('should exist', () => {
    Person.should.not.be.undefined;
  });

  /**
   * @test {Person#constructor}
   */
  it('should take an "id" parameter', () => {
    let person = new Person({ id: 12345 });
    person.id.should.equal(12345);
  });

  /**
   * @test {Person#constructor}
   */
  it('should take an "alternateName" parameter', () => {
    let person = new Person({ alternateName: 12345 });
    person.alternateName.should.equal(12345);
  });

  /**
   * @test {Person#constructor}
   */
  it('should set its "@type" for JSON-LD', () => {
    let person = new Person();
    person['@type'].should.equal('Person');
  });

  /**
   * @test {Person#constructor}
   */
  it('should set its "@context" for JSON-LD', () => {
    let person = new Person();
    person['@context'].should.equal('https://schema.org');
  });

  /**
   * @test {Person#constructor}
   */
  it('should set its "@id" for JSON-LD', () => {
    let person = new Person({ id: 12345 });
    person['@id'].should.equal('https://dashaudio.co/Person/12345');
  });

  /**
   * @test {Person#current}
   */
  it('should return the current user', () => {
    let person = Person.current();
    person.should.be.an.instanceof(Person);
  });
});
