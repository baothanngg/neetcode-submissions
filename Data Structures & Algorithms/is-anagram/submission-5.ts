class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const map = new Map();

        for (const c of s) {
            map.set(c, (map.get(c) ?? 0) + 1);
        }

        for (const c of t) {
            if (!map.has(c)) return false;

            if (map.get(c) === 0) return false;

            map.set(c, map.get(c) - 1);
        }

        return true;
    }
}
