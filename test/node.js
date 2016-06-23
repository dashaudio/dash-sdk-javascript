/**
 * Ad-hoc test for Node.js resolution of built product.
 */

var assert = require('assert');

var PersonStore = require('../build/node/stores/person.js');
var store = new PersonStore({ token: 123 });

assert(store.token === 123);

var TrackPlayEvent = require('../build/node/models/event/track/play.js');
var event = new TrackPlayEvent({ id: 123 }, 123);

assert(event);

console.log('Success!');
