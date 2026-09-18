class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const encodeStrs = strs.map((str) => `${str.length}#${str}`).join("");

        return encodeStrs;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decodeStr = [];

        let i = 0;
        while (i < str.length) {
            let length = 0;
            while (str[i] !== "#") {
                length = length * 10 + Number(str[i]);
                i++;
            }

            i++;
            decodeStr.push(str.slice(i, i + length));

            i += length;
        }

        return decodeStr;
    }
}
