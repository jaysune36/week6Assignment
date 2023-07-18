const expect = chai.expect;
const assert = chai.assert;

describe('Main Javascript testing', () => {
  describe('faceCardNumberConvert function', () => {
    it('should accept only a value of J, Q, K, A string to convert to a number value and return that value, or else return an error', () => {
      function faceCardPointConvert(item) {
        let value = 0;
        switch(item) {
          case 'J': 
          value = 11;
            break;
          case 'Q':
            value = 12;
            break;
          case 'K':
            value = 13;
            break;
          case 'A':
            value = 14;
            break;
          default:
            console.log(`Err. An incorrect value has been entered.`)
            break;
        }
        return value;
      }
      expect(faceCardPointConvert('K')).to.equal(13);
      expect(faceCardPointConvert('A')).to.equal(14);
    });
    it('#Fail, should return an error and log to console the error', () => {
      function faceCardPointConvert(item) {
        let value = 0;
        switch(item) {
          case 'J': 
          value = 11;
            break;
          case 'Q':
            value = 12;
            break;
          case 'K':
            value = 13;
            break;
          case 'A':
            value = 14;
            break;
          default:
            console.log(`Err. An incorrect value has been entered.`)
            break;
        }
        return value;
      }
      expect.fail(faceCardPointConvert('L'), 11, 'This is not a correct value');
    });
  });

  describe('faceCardNumberConvert function', () => {
    it('should accept only a value of J, Q, K, A string to convert to a number value and return that value, or else return an error', () => {
      let testArr = []
      function createList(item) {
        for (let j = 0; j < 10; j++) {
          if (item.length < 9) {
            item.push(j + 2)
          } else {
            item.push('J', 'Q', 'K', 'A');
            break;
          }
        }
      }
      createList(testArr)
      assert.deepEqual(testArr, [2,3,4,5,6,7,8,9,10,'J','Q','K','A'])
    });
    it('#Fail, should return an error', () => {
      let testArr = []
      function createList(item) {
        for (let j = 0; j < 10; j++) {
          if (item.length < 9) {
            item.push(j + 2)
          } else {
            item.push('J', 'Q', 'K', 'A');
            break;
          }
        }
      }
      createList(testArr)
      assert.deepEqual(testArr, [2,3,4,5,6,7,8,9,10,'J','Q','L','A'])
    });
  })
})