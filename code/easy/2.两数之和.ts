/**
 * 题目
 * https://leetcode-cn.com/problems/two-sum/
 */

// 最笨的：暴力破解
export function solution_1(nums: number[], target: number): number[] {
  let index1 = 0;
  const result = [];
  let founded = false;
  while (index1 < nums.length) {
    const num1 = nums[index1];
    let index2 = index1 + 1;
    while (index2 < nums.length) {
      const num2 = nums[index2];
      if (num1 + num2 === target) {
        founded = true;
        break;
      }
      index2 ++;
    }
    if (founded) {
      result.push(...[index1, index2]);
      break;
    }
    index1 ++;
  }
  return result;
};

// 字典模拟哈希求解
export function solution (nums: number[], target: number): number[] {
  const hashMap: {[key: string]: number[]} = {}
  nums.forEach((n: number, index: number) => {
    const key = n.toString()
    if (hashMap[key]) {
      hashMap[key].push(index);
    } else {
      hashMap[key] = [index];
    }
  });
  let index = 0;
  while (index < nums.length) {
    const num1 = nums[index];
    const expectKey = (target - num1).toString();
    if (hashMap[expectKey]) {
      const expectArr = hashMap[expectKey].filter(idx => idx !== index);
      if (expectArr.length) {
        return [index, expectArr[0]]
      }
    }
    index ++;
  }
  return [];
}
