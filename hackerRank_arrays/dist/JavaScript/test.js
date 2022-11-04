function createCheckDigit(membershipId) {
    // Write the code that goes here.
    let num = Number(membershipId);
    let resNum = addNum(membershipId);
    console.log(resNum);
    while (resNum && resNum > 9) {
        resNum = addNum(resNum);
    }
    console.log(resNum);
    return resNum;
}
const addNum = (id) => {
    let res = 0;
    id = id.toString();
    for (let x = 0; x < id.length; x++) {
        res += Number(id[x]);
    }
    return res;
};
console.log(createCheckDigit("55555"));
