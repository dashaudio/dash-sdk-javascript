/**
 * Application model. Based on schema.org's
 * [SoftwareApplication](https://schema.org/PersoSoftwareApplication).
 */
export class Application {
  /**
   * Create a new application with the given parameters
   * @param {Object} [params] Optional application parameters
   * @example
   * let app = new Application({
   *   operatingSystem: 'iOS 10.0',
   *   softwareVersion: '1.0',
   *   availableOnDevice: 'iPhone'
   * });
   */
  constructor(params = {}) {
    this.id = params.id || null;
    this.operatingSystem = params.operatingSystem || null;
    this.softwareVersion = params.softwareVersion || null;
    this.availableOnDevice = params.availableOnDevice || null;

    this['@type'] = 'SoftwareApplication';
    this['@context'] = 'https://schema.org';
    this['@id'] = this.id ? `https://dashaudio.co/Application/${this.id}` : null;
  }

  /**
   * Return the current application, if known
   * @return {Application} The current application in use
   * @todo Work out which application is currently in use
   * @example
   * let app = Application.current();
   * let system = app.operatingSystem;
   */
  static current() {
    return new Application({
      // eg...
      // operatingSystem: 'iOS 10.0',
      // softwareVersion: '1.0',
      // availableOnDevice: 'iPhone'
    });
  }
}
