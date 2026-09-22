class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);

        const result = [];

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                const sum = nums[j] + nums[k];
                const target = -nums[i];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;

                    while (j < k && nums[j] === nums[j - 1]) j++;
                    while (j < k && nums[k] === nums[k + 1]) k--;
                } else if (sum > target) {
                    k--;
                } else {
                    j++;
                }
            }
        }

        return result;
    }
}
