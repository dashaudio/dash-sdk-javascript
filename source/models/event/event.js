// TODO: Factor out some stuff here into utils (eg. to work out what app we are running as).

export class Event {
  /**
   * Generate a description of the current user, confirming to schema.org's
   * [Person](https://schema.org/Person).
   * TODO: Fill in the actual person
   * @return {Object} The 'Person' schema
   */
  agent() {
    return {
      '@type': 'Person',
      '@context': 'http://schema.org',
      '@id': 'http://dashaudio.co/Person/12345',
      'alternateName': '123e4567-e89b-12d3-a456-426655440000'
    };
  }

  /**
   * Generate a description of the currently running app, conforming to schema.org's
   * [SoftwareApplication](https://schema.org/SoftwareApplication).
   * TODO: Fill in the actual application
   * @return {Object} The 'SoftwareApplication' schema
   */
  instrument() {
    return {
      '@type': 'MobileApplication',
      '@context': 'http://schema.org',
      '@id': 'http://dashaudio.co/MobileApplication/2A0F6DB3-6819-4B69-AF98-33A6472C6F53',
      'operatingSystem': 'iOS 9.0',
      'softwareVersion': '2.1',
      'availableOnDevice': 'iPhone'
    };
  }

  /**
   * Generate a location field for the current app instance. Currently just an IP address.
   * TODO: Work out how to get IP, or what sentinel value to use to defer to server
   * @return {String} The IP address string
   */
  location() {
    return '86.123.785.197';
  }

  /**
   * Current time in ISO 8601 format.
   * @return {String} The date ISO string
   */
  now() {
    return (new Date()).toISOString();
  }
}
