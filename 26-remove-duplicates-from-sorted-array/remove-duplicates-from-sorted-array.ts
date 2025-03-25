function removeDuplicates(nums: number[]): number {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    while (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
      nums.splice(nums.indexOf(nums[i]), 1);
    }
  }
  return length;
}