function pivotIndex(nums: number[]): number {
    let rightSide = nums.reduce((acc, current) =>  acc + current, 0);
    let leftSide = 0;

    for (let i = 0; i < nums.length; i++) {
        if (rightSide - nums[i] - leftSide === leftSide) {
            return i;
        }
        leftSide += nums[i];
    }
    return -1;
};