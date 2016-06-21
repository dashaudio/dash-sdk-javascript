# Dash SDK for JavaScript

[![Build Status](https://travis-ci.com/dashaudio/dash-sdk-javascript.svg?token=j6b8xzvQsPodsJQUxCGM&branch=master)](https://travis-ci.com/dashaudio/dash-sdk-javascript)
[![Test Coverage](https://codeclimate.com/github/dashaudio/dash-sdk-javascript/badges/coverage.svg)](https://codeclimate.com/github/dashaudio/dash-sdk-javascript/coverage)
[![Documentation](http://documentation.dashaudio.co/sdk/javascript/badge.svg)](http://documentation.dashaudio.co/sdk/javascript/)
[![Code Climate](https://codeclimate.com/github/dashaudio/dash-sdk-javascript/badges/gpa.svg)](https://codeclimate.com/github/dashaudio/dash-sdk-javascript)

# Quick Start

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

TODO

## Tracks

TODO
