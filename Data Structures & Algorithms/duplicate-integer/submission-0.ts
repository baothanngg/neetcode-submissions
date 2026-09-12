class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const result = new Set(nums)

        if(result.size === nums.length)
            return false

        return true
    }
}
