class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map();
        let index1 = -1;
        let index2 = -1;

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], i);
        }

        for (let i = 0; i < nums.length; i++) {
            const num2 = target - nums[i];

            if (i !== map.get(num2) && map.has(num2)) {
                index1 = i;
                index2 = map.get(num2);
                break;
            }
        }

        return [index1, index2];
    }
}
