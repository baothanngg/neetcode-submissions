class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set<number>(nums);
        if (!set.size) return 0;

        let max = 1;
        for (const num of set) {
            let count = 1;
            if (!set.has(num - 1)) {
                let currentNum = num + 1;
                while (set.has(currentNum)) {
                    currentNum++;
                    count++;
                }

                max = Math.max(max, count);
            }
        }

        return max;
    }
}
