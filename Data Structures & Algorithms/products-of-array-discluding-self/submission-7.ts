class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const leftProduct = [];
        const rightProduct = [];

        let left = 1;
        for (let i = 0; i < nums.length; i++) {
            leftProduct[i] = left;
            left *= nums[i];
        }

        let right = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            rightProduct[i] = right;
            right *= nums[i];
        }

        const result = leftProduct.map((num, i) => num * rightProduct[i]);

        return result;
    }
}
