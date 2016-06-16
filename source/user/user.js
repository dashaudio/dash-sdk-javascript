/**
* User class
*/
export default class User {

  /**
  * Get user's name
  * @returns {String} name
  */
  name() {
    return 'my name';
  }

  // Get the current user, if we know who that is. Otherwise return an anonymous user.
  static current() {
    return new User();
  }
}
