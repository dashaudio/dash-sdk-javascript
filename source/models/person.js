/**
* Person model. Based on schema.org's [Person](https://schema.org/Person).
*/
export class Person {
  /**
   * Create a new person with the given parameters
   * @param  {Object} params
   */
  constructor(params = {}) {
    this.id = params.id || null;
    this.email = params.email || null;
    this.alternateName = params.alternateName || null;

    this['@type'] = 'Person';
    this['@context'] = 'https://schema.org';
    this['@id'] = this.id ? `https://dashaudio.co/Person/${this.id}` : null;
  }

  /**
   * Return the current user, if known
   * @return {Person} The current user of the system
   * @todo: Cache and be able to fetch current user
   */
  static current() {
    return new Person({
      // ...
    });
  }
}
