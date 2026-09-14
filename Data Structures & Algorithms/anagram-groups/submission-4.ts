class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group = new Map<string, string[]>();

        for (const str of strs) {
            const count = new Map<string, number>();

            for (const char of str) {
                count.set(char, (count.get(char) ?? 0) + 1);
            }

            const key = [...count.entries()]
                .sort((a, b) => a[0].localeCompare(b[0])) // [['a', 0], ['b', 0]]
                .map(([char, freq]) => `${char}:${freq}`) // ['a:0', 'b:0']
                .join("|");

            if (!group.has(key)) {
                group.set(key, []);
            }

            group.get(key).push(str);
        }

        return [...group.values()];
    }
}
