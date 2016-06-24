import { Identity } from './identity';

/**
* Person model. Based on schema.org's [Person](https://schema.org/Person).
*/
export class Person {
  /**
   * Create a new person with the given parameters
   * @param  {Object} [params]
   */
  constructor(params = {}) {
    this.id = params.id || null;
    this.email = params.email || null;
    this.alternateName = params.alternateName || null;

    this.identities = params.identities ? params.identities.map((i) => {
      return new Identity({ id: i.user_id, provider: i.provider, token: i.access_token });
    }) : [];

    this['@type'] = 'Person';
    this['@context'] = 'https://schema.org';
    this['@id'] = this.id ? `https://dashaudio.co/Person/${this.id}` : null;
  }

  /**
   * Return the current user, if known
   * @return {Person} The current user of the system
   * @todo Cache and be able to fetch current user
   * @todo Move this out to a service; model shouldn't know how to save/fetch itself!
   */
  static current() {
    return new Person({
      // ...
    });
  }

  /**
   * Report whether a person has a SoundCloud identity attached.
   * @return {Boolean} True if the user has a SoundCloud identity
   */
  get hasSoundCloudIdentity() {
    return this.identities.some(i => i.provider && i.provider.match(/soundcloud/));
  }

  /**
   * Return the person's SoundCloud identity, or null
   * @return {Identity}
   */
  get soundCloudIdentity() {
    let results = this.identities.filter(i => i.provider && i.provider.match(/soundcloud/));
    return results.length ? results[0] : null;
  }

  /**
   * Report whether a person has a Google identity attached.
   * @return {Boolean} True if the user has a Google identity
   */
  get hasGoogleIdentity() {
    return this.identities.some(i => i.provider && i.provider.match(/google/));
  }

  /**
   * Return the person's Google identity, or null
   * @return {Identity}
   */
  get googleIdentity() {
    let results = this.identities.filter(i => i.provider && i.provider.match(/google/));
    return results.length ? results[0] : null;
  }
}
