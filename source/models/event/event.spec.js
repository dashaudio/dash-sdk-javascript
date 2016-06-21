import chai from 'chai';
import { Event } from './event';
import { EventStatus } from './status';
import { Person } from '../person';
import { Application } from '../application';

describe('Event', () => {
  /**
   * @test {Event}
   * @todo Complete tests
   */
  it('should exist', () => {
    Event.should.not.be.undefined;
  });

  /**
   * @test {Event#constructor}
   */
  it('should have "completed" status by default', () => {
    let event = new Event();
    event.status.should.equal(EventStatus.Completed);
  });

  /**
   * @test {Event#constructor}
   * @todo Validate this is the actual current application; set for test environment
   */
  it('should have the current application set by default', () => {
    let event = new Event();
    event.application.should.be.an.instanceof(Application);
  });

  /**
   * @test {Event#constructor}
   * @todo Validate this is the actual current user; set for test environment
   */
  it('should have the current user set by default', () => {
    let event = new Event();
    event.person.should.be.an.instanceof(Person);
  });

  /**
   * @test {Event#constructor}
   * @todo Validate this is the actual current location; set for test environment
   */
  it('should have the current location set by default', () => {
    let event = new Event();
    event.location.should.equal('');
  });

  /**
   * @test {Event#constructor}
   */
  it('should have the current time set by default', () => {
    let event = new Event();
    let eventTime = Date.parse(event.time);
    let now = (new Date()).getTime();

    eventTime.should.be.within(now - 100, now + 100);
  });

  /**
   * @test {Event#constructor}
   */
  it('should take an override parameter for "status"', () => {
    let status = EventStatus.Failed;
    let event = new Event({ status });

    event.status.should.equal(status);
  });

  /**
   * @test {Event#constructor}
   */
  it('should take an override parameter for "application"', () => {
    let application = new Application();
    let event = new Event({ application });

    event.application.should.equal(application);
  });

  /**
   * @test {Event#constructor}
   */
  it('should take an override parameter for "person"', () => {
    let person = new Person();
    let event = new Event({ person });

    event.person.should.equal(person);
  });

  /**
   * @test {Event#constructor}
   */
  it('should take an override parameter for "time"', () => {
    let time = (new Date()).toISOString();
    let event = new Event({ time });

    event.time.should.equal(time);
  });

  /**
   * @test {Event#build}
   */
  it('should fail to build if not overriden', () => {
    let event = new Event();
    (() => event.build()).should.throw;
  });
});
