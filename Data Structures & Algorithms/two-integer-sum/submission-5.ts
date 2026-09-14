class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map();

         for (let i = 0; i < nums.length; i++) {
            const num2 = target - nums[i]

            if(map.has(num2)) {
                return [map.get(num2), i]
            }

            map.set(nums[i], i)
        }

        return []
    }
}
