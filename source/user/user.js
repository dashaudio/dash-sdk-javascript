// # User

// The user object allows fetching and saving of user settings and properties.
export class User {

  // ## Properties

  // Get the user's name, if we have it
  name() {
    return 'my name';
  }

  // Get the current user, if we know who that is. Otherwise return an anonymous user.
  static current() {
    return new User();
  }
}
