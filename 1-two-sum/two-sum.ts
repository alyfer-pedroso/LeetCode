/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums: number[], target: number): Array<number | undefined> => {
  if (nums.length < 2 || nums.length > 10 ** 4 || nums.every((num) => num < (-10) ** 9 || num > 10 ** 9) || target < (-10) ** 9 || target > 10 ** 9) {
    return [];
  }

  const map: Map<number, number> = new Map();
  const result: Array<number | undefined> = [];

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      result.push(map.get(diff), i);
      break;
    }

    map.set(nums[i], i);
  }

  return result;
};
