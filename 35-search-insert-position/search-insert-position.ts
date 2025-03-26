function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target || nums[i] > target) return i
        if (nums[i] < target && i === nums.length - 1) return i + 1;
    }
};