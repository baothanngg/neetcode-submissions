class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency = new Map();

        for (const num of nums) {
            frequency.set(num, (frequency.get(num) ?? 0) + 1);
        }

        const numberOfFrequency = new Map();
        for (const [num, freq] of frequency) {
            if (!numberOfFrequency.has(freq)) numberOfFrequency.set(freq, []);

            numberOfFrequency.get(freq).push(num);
        }

        const result = []
        for (let i = nums.length; i >= 1; i--) {
            const current = numberOfFrequency.get(i)

            if(!current) continue

            for(const num of current) {
                result.push(num)

                if(result.length === k)
                    return result
            }
        }
        return result
    }
}
