var fs = require('fs');





const checkbrackets = (text) => {
    let res_stack = []
    let openingbrck = ['[', '(', '{']
    let closingbrck = [']', ')', '}']

    

    if (closingbrck.includes((text[0]))) {
        return 1
    }

    for(let x = 0; x < text.length; x++) {
        const currentChar = text[x]


        if(openingbrck.includes(currentChar) ) {
            res_stack.push(currentChar)
        }
        if (closingbrck.indexOf(currentChar)) {
            const closingBracInd = closingbrck.indexOf(currentChar)
            const lastElemInd = res_stack.indexOf(res_stack.length-1) 
            
            if(closingBracInd === lastElemInd) {
                res_stack.pop()
            }else if(!closingBracInd === lastElemInd) {
                return x=1
            }
        }
    }

    return 'success'

}
for(let x = 1; x<55; x++) {
    try { 
         let data
     x < 10 ? data = fs.readFileSync(`tests/0${x}`, 'utf8') : data =  fs.readFileSync(`tests/${x}`, 'utf8')
    // console.log(data.toString());    
    console.log(checkbrackets(data.toString()), x) 
} catch(e) {
    console.log('Error:', e.stack);
}
}


const text = '{}[]'
