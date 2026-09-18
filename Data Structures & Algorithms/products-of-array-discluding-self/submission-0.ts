class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const resultPrefix = [];
        const resultSuffix = [];
        const result = [];

        let productPrefix = 1;
        let productSuffix = 1;

        for (let i = 0; i < nums.length; i++) {
            const j = nums.length - i - 1;

            resultPrefix[i] = productPrefix;
            productPrefix *= nums[i];

            resultSuffix[j] = productSuffix;
            productSuffix *= nums[j];
        }

        for (let i = 0; i < nums.length; i++) {
            result.push(resultPrefix[i] * resultSuffix[i]);
        }

        return result;
    }
}
