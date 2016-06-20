# Dash SDK for JavaScript

[![Build Status](https://travis-ci.com/dashaudio/dash-sdk-javascript.svg?token=j6b8xzvQsPodsJQUxCGM&branch=master)](https://travis-ci.com/dashaudio/dash-sdk-javascript)
[![Test Coverage](https://codeclimate.com/github/dashaudio/dash-sdk-javascript/badges/coverage.svg)](https://codeclimate.com/github/dashaudio/dash-sdk-javascript/coverage)
[![Documentation](http://documentation.dashaudio.co/sdk/javascript/badge.svg)](http://documentation.dashaudio.co/sdk/javascript/)

# Quick Start

## Analytics

The Dash SDK provides a mechanism for reporting user events to our analytics system. Other parts
of the SDK automatically send these events (for example, during audio playback), but the API is
exposed here to allow it to be used easily with other systems. The event classes provided are
designed to be used with our logging system, as follows:

    // Create and send a new play event

    let event = TrackPlayEvent({ id: 12345 });
    let store = new LogStore();

    store.save(event).then(() => console.log('Saved the play event!'));

## Users

TODO

## Tracks

TODO
