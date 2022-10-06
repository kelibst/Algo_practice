function isValid(s) {
    // Write your code here
    // get char frequency of s in map
    const map = new Map();
    for (let c of s) {
        map.set(c, map.get(c) + 1 || 1);
    }
    // check values length
    //  - if smaller than 2, return yes
    if (map.size < 2) {
        return "YES";
    }
    // find smallest and largest int of values
    const min = Math.min(...map.values());
    const max = Math.max(...map.values());
    // count char frequency occurrence
    const count = new Map();
    for (let c of map.values()) {
        count.set(c, count.get(c) + 1 || 1);
    }
    // base cases
    //  - check diff min and max is equal to 1 and max doesnt occur more than once, return yes
    if (Math.abs(min - max) === 1 && count.get(max) === 1) {
        return "YES";
    }
    //  - check min is smaller than 2 and occurs not more than once, return yes
    if (min < 2 && count.get(min) === 1 && count.size === 2) {
        return "YES";
    }
    //  - check equality values, return yes if all equal
    if (min === max) {
        return "YES";
    }
    //  - otherwise return no
    return "NO";
    // let res = "YES"
    // let resMap = new Map()
    // for (let x = 0; x < s.length; x++) {
    //     if (resMap.has(s[x])) {
    //         resMap.set(s[x], resMap.get(s[x]) + 1)
    //     } else {
    //         resMap.set(s[x], 1)
    //     }
    // }
    // const min = Math.min(...resMap.values());
    // const max = Math.max(...resMap.values());
    // console.log(...resMap.values() )
    // if(Math.abs(max-min) > 1 && resMap.get(max) === 1) {
    //     return "NO"
    // }
    // return res
}
