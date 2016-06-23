import chai from 'chai';
import promised from 'chai-as-promised';
import Application from './application';

chai.should();

describe('Application', () => {
  /**
   * @test {Application}
   */
  it('should exist', () => {
    Application.should.not.be.undefined;
  });

  /**
   * @test {Application#constructor}
   */
  it('should take an "id" parameter', () => {
    let application = new Application({ id: 12345 });
    application.id.should.equal(12345);
  });

  /**
   * @test {Application#constructor}
   */
  it('should take an "operatingSystem" parameter', () => {
    let application = new Application({ operatingSystem: 'foo' });
    application.operatingSystem.should.equal('foo');
  });

  /**
   * @test {Application#constructor}
   */
  it('should take an "softwareVersion" parameter', () => {
    let application = new Application({ softwareVersion: 'foo' });
    application.softwareVersion.should.equal('foo');
  });

  /**
   * @test {Application#constructor}
   */
  it('should take an "availableOnDevice" parameter', () => {
    let application = new Application({ availableOnDevice: 'foo' });
    application.availableOnDevice.should.equal('foo');
  });

  /**
   * @test {Application#constructor}
   */
  it('should set its "@type" for JSON-LD', () => {
    let application = new Application();
    application['@type'].should.equal('SoftwareApplication');
  });

  /**
   * @test {Application#constructor}
   */
  it('should set its "@context" for JSON-LD', () => {
    let application = new Application();
    application['@context'].should.equal('https://schema.org');
  });

  /**
   * @test {Application#constructor}
   */
  it('should set its "@id" for JSON-LD', () => {
    let application = new Application({ id: 12345 });
    application['@id'].should.equal('https://dashaudio.co/Application/12345');
  });

  /**
   * @test {Application#current}
   */
  it('should return the current application', () => {
    let application = Application.current();
    application.should.be.an.instanceof(Application);
  });
});
