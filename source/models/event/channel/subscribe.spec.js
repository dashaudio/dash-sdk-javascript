import chai from 'chai';
import { ChannelSubscribeEvent } from './subscribe';

/**
 * @test {ChannelSubscribeEvent}
 */
describe('Channel Subscribe Event', () => {
  it('should exist', () => {
    ChannelSubscribeEvent.should.not.be.undefined;
  });

  /**
   * @test {ChannelSubscribeEvent#build}
   */
  it('should build its dictionary', () => {
    let event = new ChannelSubscribeEvent();
    let type = event.build()['@type'];
    type.should.equal('SubscribeAction');
  });
});
