import { solution } from '@easy/2.两数之和';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeSameArray: (expected: number[]) => CustomMatcherResult;
    }
  }
}

expect.extend({
  toBeSameArray(received: number[], argument: number[]) {
    let pass = true;
    if (received.length !== received.length) {
      pass = false;
    } else {
      const sReceived = received.sort();
      const sArgument = argument.sort();
      let index = 0;
      while (index < sReceived.length) {
        if (sReceived[index] !== sArgument[index]) {
          pass = false;
          break;
        }
        index ++;
      }
    }
    return {
      message: () => `[${received.toString}] is ${pass? "": "not"} equal to [${argument.toString()}]`,
      pass,
    }
  }
})

describe('Demo Test Case', () => {
  it('nums=[2,7,11,15], target=9 => [0,1]', () => {
    expect(solution([2, 7, 11, 15], 9)).toBeSameArray([0, 1]);
  })
  it('nums=[3,2,4], target=6 => [1,2]', () => {
    expect(solution([3,2,4], 9)).toBeSameArray([1, 2]);
  })
  it('nums=[3,3], target=6 => [0,1]', () => {
    expect(solution([3,3], 9)).toBeSameArray([0, 1]);
  })
  it('nums=[3,2,4], target=6 => [1,2]', () => {
    expect(solution([3,3], 9)).toBeSameArray([0, 1]);
  })
})
