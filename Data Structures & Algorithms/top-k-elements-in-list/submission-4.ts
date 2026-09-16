class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency = new Array();
        const map = new Map<number, number>();
        const frequencyMap = new Map<number, number[]>()

        for (const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        for (const [num, freq] of map) {
            if(!frequencyMap.has(freq))
                frequencyMap.set(freq, [])

            frequencyMap.get(freq)!.push(num)
        }

        
        for(let i = nums.length; i >= 1; i--) {
            const numbers = frequencyMap.get(i)

            if(!numbers) continue

            for(const num of numbers) {
                frequency.push(num)

                if(frequency.length === k) {
                    return frequency
                }
            }
        }
    }
}
