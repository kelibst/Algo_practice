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

        let lastItemInRes = res_stack[ res_stack.length-1]

        if(openingbrck.includes(currentChar) ) {
            res_stack.push({ind: x, val: currentChar})
        }
        else if (closingbrck.includes(currentChar)) {
            if(closingbrck.indexOf(currentChar) == openingbrck.indexOf(lastItemInRes?.val)) {
                res_stack.pop()
            }
            else if( closingbrck.indexOf(currentChar) !== openingbrck.indexOf(lastItemInRes?.val) ) {
                return x+1
            }
        }
        
    }

    if (res_stack.length === 0) {
        return 'Success'
    }else if (res_stack.length) {
        return res_stack[res_stack.length-1].ind+1
    }
}


// const text = '[](()'

// console.log(checkbrackets(text))

// module.exports = checkbrackets
for(let x = 1; x<55; x++) {
    try { 
         let data
         let ans
     x < 10 ? data = fs.readFileSync(`tests/0${x}`, 'utf8') : data =  fs.readFileSync(`tests/${x}`, 'utf8')
     x < 10 ? ans = fs.readFileSync(`tests/0${x}.a`, 'utf8') : ans =  fs.readFileSync(`tests/${x}.a`, 'utf8')
    const res =  checkbrackets(data.toString().trim())
    ans = ans?.toString().trim()
    console.log(res == ans, x) 
} catch(e) {
    console.log('Error:', e.stack);
}
}


