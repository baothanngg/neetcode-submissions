class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    // Use Set built-in method
    // hasDuplicate(nums: number[]): boolean {
    //     const result = new Set(nums)

    //     if(result.size === nums.length)
    //         return false

    //     return true
    // }

    hasDuplicate(nums: number[]): boolean {
        nums = nums.sort()

        for(let i = 0; i < nums.length; i++) {
            if(nums[i+1] === nums[i])
                return true
        }

        return false
    }
}
