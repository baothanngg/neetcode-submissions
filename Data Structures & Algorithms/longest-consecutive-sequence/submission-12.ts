class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums)

        if(!set.size) return 0

        let max = 0
        for(const num of nums) {
            if(!set.has(num - 1)) {
              let count = 1  
              let cur = num 
              while(set.has(cur + 1)) {
                cur += 1
                count ++
              }

              max = Math.max(count, max)
            }
        }

        return max

    }
}
