function singleNumber(nums: number[]): number {
    return nums.reduce((acc, next) => acc ^ next, 0);
};