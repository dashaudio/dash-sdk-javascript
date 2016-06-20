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
    let event = new ChannelSubscribeEvent({ id: 12345 });
    let type = event.build()['@type'];
    type.should.equal('SubscribeAction');
  });

  /**
   * @test {ChannelSubscribeEvent#constructor}
   */
  it('should fail to construct without a channel', () => {
    (() => new ChannelSubscribeEvent()).should.throw(Error);
  });

  /**
   * @test {ChannelSubscribeEvent#build}
   */
  it('should contain channel ID in its dictionary', () => {
    let event = new ChannelSubscribeEvent({ id: 12345 });
    let dictionary = event.build();
    dictionary.object['@id'].should.equal(12345);
  });
});
