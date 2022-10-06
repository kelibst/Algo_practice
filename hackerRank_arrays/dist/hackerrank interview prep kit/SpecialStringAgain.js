function substrCount(n, s) {
    let result = 0;
    let i = 0;
    while (i < n) {
        let char_count = 1;
        while (i + 1 < n && s[i] == s[i + 1]) {
            i += 1;
            char_count += 1;
        }
        result += Number(char_count * (char_count + 1)) / 2;
        i += 1;
    }
    for (let i = 1; i < n; i++) {
        let char_count = 1;
        while (i + char_count < n &&
            i - char_count >= 0 &&
            s[i] != s[i - 1] &&
            s[i - char_count] == s[i + char_count] &&
            s[i - 1] == s[i - char_count]) {
            char_count += 1;
        }
        result += char_count - 1;
    }
    return result;
}
