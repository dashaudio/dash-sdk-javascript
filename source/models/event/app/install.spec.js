import chai from 'chai';
import AppInstallEvent from './install';

/**
 * @test {AppInstallEvent}
 */
describe('App Install Event', () => {
  it('should exist', () => {
    AppInstallEvent.should.not.be.undefined;
  });

  /**
   * @test {AppInstallEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new AppInstallEvent();
    let type = event.build()['@type'];
    type.should.equal('InstallAction');
  });
});
