import { solution } from '@easy/1.数组异或操作';

describe('Demo Test Case', () => {
  it('n=5, start=0 => 8', () => {
    expect(solution(5, 0)).toBe(8);
  })
  it('n=4, start=3 => 8', () => {
    expect(solution(4, 3)).toBe(8);
  })
  it('n=1, start=7 => 7', () => {
    expect(solution(1, 7)).toBe(7);
  })
  it('n=10, start=5 => 2', () => {
    expect(solution(10, 5)).toBe(2);
  })
})
