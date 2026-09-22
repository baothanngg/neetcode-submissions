class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        for(let i = 0; i < s.length; i++) {
            const j = s.length - i - 1

            if(s[i] !== s[j]) {
                return false
            }
        }

        return true
    }
}
