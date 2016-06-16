import chai from 'chai';
import promised from 'chai-as-promised';
import sinon from 'sinon';
import { PlaysAnalytic } from './plays';
import fixtures from './plays.spec.fixtures';

chai.should();
chai.use(promised);

/**
* @test {PlaysAnalytic#refresh}
*/
describe('Plays Analytic', () => {
  let fetch;
  let json = JSON.stringify(fixtures.default);

  beforeEach(() => {
    fetch = () => Promise.resolve(new Response(json, {
      status: 200, headers: { 'Content-type': 'application/json' }
    }));
  });

  it('should refresh plays data', () => {
    let plays = new PlaysAnalytic(fetch);

    return plays.refresh().should.eventually.be.fulfilled;
  });

  it('should format the data response', () => {
    let plays = new PlaysAnalytic(fetch);

    return plays.refresh().should.eventually.satisfy((data) => {
      return data[0].value.should.equal(123);
    });
  });
});
