import chai from 'chai';
import promised from 'chai-as-promised';
import sinon from 'sinon';
import { PlaysAnalytic } from './plays';

chai.should();
chai.use(promised);

/**
* @test {PlaysAnalytic#refresh}
*/
describe('Plays Analytic', () => {
  var fetch;

  beforeEach(() => {
    let response = `
      {
        "buckets": [
          {
            "key_as_string": "2016-06-16",
            "key": 1466035200000,
            "doc_count": 123
          }
        ]
      }
    `;

    var res = new global.Response(response, {
      status: 200,
      headers: {
        'Content-type': 'application/json'
      }
    });

    fetch = () => Promise.resolve(res);
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
