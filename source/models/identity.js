/**
 * Identity model, representing a Person's identity for a given service provider. This model is not
 * based on a schema.org definition, and should be reviewed to see if it can be.
 * @todo See if this model can be based on a schema.org definition
 */
export default class Identity {
  /**
   * Create a new identity with the given parmeters
   * @param  {Object} [params]
   */
  constructor(params = {}) {
    this.id = params.id || '';
    this.provider = params.provider || '';
    this.token = params.token || '';
  }
}
