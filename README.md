# Dash SDK for JavaScript

[![Build Status](https://travis-ci.org/dashaudio/dash-sdk-javascript.svg?branch=master)](https://travis-ci.org/dashaudio/dash-sdk-javascript)
[![Test Coverage](https://codeclimate.com/github/dashaudio/dash-sdk-javascript/badges/coverage.svg)](https://codeclimate.com/github/dashaudio/dash-sdk-javascript/coverage)
[![Documentation](http://documentation.dashaudio.co/sdk/javascript/badge.svg)](http://documentation.dashaudio.co/sdk/javascript/)
[![Code Climate](https://codeclimate.com/github/dashaudio/dash-sdk-javascript/badges/gpa.svg)](https://codeclimate.com/github/dashaudio/dash-sdk-javascript)

# Quick Start

The Dash SDK works in Node and in the browser. Install it using NPM:

    // Install the SDK
    npm install --save dash-sdk

    // Use the SDK in Node
    var Person = require('dash-sdk').Person;
    var me = new Person({ email: my@email.com });

    // Use the SDK in the browser
    var Person = Dash.Person;
    var me = new Person({ email: my@email.com });

## Analytics

The Dash SDK provides a mechanism for reporting user events to our analytics system. Other parts
of the SDK automatically send these events (for example, during audio playback), but the API is
exposed here to allow it to be used easily with other systems. The event classes provided are
designed to be used with our logging system, as follows:

    // Create a basic event
    let event = new AppOpenEvent();

    // Override a parameter
    let event = new AppOpenEvent({ location: '40.748441,-73.985664' })

    // Save the event to our logging backend
    event = new AppOpenEvent();
    store = new LogStore();
    store.save(event.build()).then(() => { ... });

See the [Event](./class/source/models/event/event.js~Event.html) base class and its derived classes
for more events.

## Users

Basic service for retrieving users is provided, using a JWT API token:

    const TOKEN = '...';
    const ID = '...';

    // Create a person store
    let store = new PersonStore({ token: TOKEN });

    // Fetch all people
    store.fetchAll().then(people => {
      console.log(`${people.length} people found!`)
    });

    // Fetch and use a single person
    store.fetchById(ID).then(person => {
      let key = person.soundCloudIdentity.token;
      if (key) console.log(`${person.email} has a SoundCloud account with token: ${key}`);
    });

## Tracks

TODO
