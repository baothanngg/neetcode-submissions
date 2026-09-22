class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;
        let max = 0;

        while (l < r) {
            const height = Math.min(heights[l], heights[r]);
            const width = r - l;
            const amount = height * width;

            max = Math.max(max, amount);
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return max;
    }
}
