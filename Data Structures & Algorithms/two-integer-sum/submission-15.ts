class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const arr = nums.map((value, i) => ({
            value,
            i,
        }));

        arr.sort((a, b) => a.value - b.value);

        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const operation = arr[left].value + arr[right].value;

            if (target === operation) {
                return [arr[left].i, arr[right].i]
            }

            if (operation > target) {
                right--;
            } else {
                left++;
            }
        }

        return [];
    }
}
