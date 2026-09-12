class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const result = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            if (result.has(s[i])) {
                const numberOfTime = result.get(s[i]);
                result.set(s[i], numberOfTime + 1);
                continue;
            }

            result.set(s[i], 1);
        }

        for (const c of t) {
            if (!result.has(c)) return false;
            
            const count = result.get(c);
            if (count === undefined || count === 0) return false;
            result.set(c, count - 1);
        }

        return true;
    }
}
