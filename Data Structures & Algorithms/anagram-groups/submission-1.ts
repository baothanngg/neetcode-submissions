class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (const str of strs) {
            const count = new Map<string, number>();

            // Đếm frequency của từng ký tự
            for (const char of str) {
                count.set(char, (count.get(char) ?? 0) + 1);
            }

            // Tạo signature ổn định
            const key = [...count.entries()]
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([char, freq]) => `${char}:${freq}`)
                .join("|");

            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key)!.push(str);
        }

        return [...map.values()];
    }
}
