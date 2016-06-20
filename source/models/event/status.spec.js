import chai from 'chai';
import { EventStatus } from './status';

/**
 * @test {EventStatus}
 */
describe('EventStatus', () => {
  it('should exist', () => {
    EventStatus.should.not.be.undefined;
  });

  it('should have an active status', () => {
    EventStatus.Active.should.contain('ActiveActionStatus');
  });

  it('should have a completed status', () => {
    EventStatus.Completed.should.contain('CompletedActionStatus');
  });

  it('should have a failed status', () => {
    EventStatus.Failed.should.contain('FailedActionStatus');
  });
});
