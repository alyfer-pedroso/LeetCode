function canJump(nums: number[]): boolean {
    let finalPosition = nums.length - 1;
    for (let idx = nums.length - 2; idx >= 0; idx--) {
        if (idx + nums[idx] >= finalPosition) finalPosition = idx;
    }
    return finalPosition === 0;
};