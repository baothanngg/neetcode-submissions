class Hash {
    private buckets: number[][];

    constructor(size: number = 10000) {
        this.buckets = Array.from({ length: size }, () => []);
    }

    private hash(key: number) {
        return Math.abs(key) % this.buckets.length;
    }

    add(key: number) {
        const index = this.hash(key);

        if (!this.buckets[index].includes(key)) {
            this.buckets[index].push(key);
        }
    }

    has(key: number) {
        const index = this.hash(key);

        return this.buckets[index].includes(key);
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;

        const result = new Hash();

        for (const num of nums) {
            result.add(num);
        }

        let max = 1;
        for (const num of nums) {
            let count = 1;
            if (!result.has(num - 1)) {
                let current = num;
                while (result.has(current + 1)) {
                    current++;
                    count++;
                }
            }
            max = Math.max(max, count);
        }

        return max;
    }
}
