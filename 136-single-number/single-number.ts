function singleNumber(nums: number[]): number {
  const count: { [key: number]: number } = {};
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }
  for (const num in count) {
    if (count[num] === 1) return +num;
  }
  return 0;
}