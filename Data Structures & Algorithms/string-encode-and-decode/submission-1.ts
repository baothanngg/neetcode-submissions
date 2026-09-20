class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const encodeStrs = strs.map((str) => `${str.length}T${str}`).join("");
        return encodeStrs;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decodeStrs = [];

        let i = 0;

        while (i < str.length) {
            let length = 0;
            while (str[i] !== "T") {
                length = length * 10 + Number(str[i]);
                i++;
            }

            i++
            const s = str.slice(i , i + length);
            decodeStrs.push(s);
            i += length;
        }
        return decodeStrs;
    }
}
