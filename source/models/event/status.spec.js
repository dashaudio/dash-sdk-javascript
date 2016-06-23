import chai from 'chai';
import EventStatus from './status';

describe('EventStatus', () => {
  /**
   * @test {EventStatus}
   */
  it('should exist', () => {
    EventStatus.should.not.be.undefined;
  });

  /**
   * @test {EventStatus#Active}
   */
  it('should have an active status', () => {
    EventStatus.Active.should.contain('ActiveActionStatus');
  });

  /**
   * @test {EventStatus#Completed}
   */
  it('should have a completed status', () => {
    EventStatus.Completed.should.contain('CompletedActionStatus');
  });

  /**
   * @test {EventStatus#Failed}
   */
  it('should have a failed status', () => {
    EventStatus.Failed.should.contain('FailedActionStatus');
  });
});
