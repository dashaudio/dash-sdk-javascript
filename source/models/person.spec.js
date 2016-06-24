import chai from 'chai';
import promised from 'chai-as-promised';

import { Person } from './person';
import { Identity } from './identity';

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

  /**
   * @test {Person.hasSoundCloudIdentity}
   */
  it('should report a SoundCloud user has a SoundCloud identity', () => {
    let identity = new Identity({ provider: 'soundcloud' });
    let person = new Person({ identities: [identity] });

    person.hasSoundCloudIdentity.should.be.true;
  });

  /**
   * @test {Person.soundCloudIdentity}
   */
  it('should return a SoundCloud if present', () => {
    let identity = new Identity({ provider: 'soundcloud' });
    let person = new Person({ identities: [identity] });

    person.soundCloudIdentity.should.deep.equal(identity);
  });

  /**
   * @test {Person.hasSoundCloudIdentity}
   */
  it('should report a non-SoundCloud user does not have a SoundCloud identity', () => {
    let person = new Person();
    person.hasSoundCloudIdentity.should.not.be.true;
  });

  /**
   * @test {Person.hasSoundCloudIdentity}
   */
  it('should report a Google user has a Google identity', () => {
    let identity = new Identity({ provider: 'google-oauth2' });
    let person = new Person({ identities: [identity] });

    person.hasGoogleIdentity.should.be.true;
  });

  /**
   * @test {Person.googleIdentity}
   */
  it('should return a Google if present', () => {
    let identity = new Identity({ provider: 'google-oauth2' });
    let person = new Person({ identities: [identity] });

    person.googleIdentity.should.deep.equal(identity);
  });

  /**
   * @test {Person.hasSoundCloudIdentity}
   */
  it('should report a non-Google user does not have a Google identity', () => {
    let person = new Person();
    person.hasGoogleIdentity.should.not.be.true;
  });
});
