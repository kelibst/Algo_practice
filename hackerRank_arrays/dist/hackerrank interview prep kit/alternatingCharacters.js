function alternatingCharacters(s) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < s.length;) {
        // console.log(s.charAt(i) == s.charAt(i+1), s.charAt(i))
        while (s.charAt(i) == s.charAt(i + 1)) {
            count += 1;
            i += 1;
        }
        i += 1;
    }
    return count;
}
