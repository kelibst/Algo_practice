let two = parseInt('11011', 2) + parseInt('1000', 2)
two = two.toString(2)
let resCont = document.querySelector('#res');
const btnsContainer = document.querySelector('#btns')
let base10Ops = ''
let base2Num = ''

const updateData = (text) => {
   return  resCont.innerHTML = resCont.innerHTML.concat(text)
}

const convertTo10 = (base2Num, sym) => {
    console.log(base2Num)
    let text10 = parseInt(base2Num, 2)
    // base10 = base10.concat(text10)
    base10Ops = base10Ops.concat(text10)
    base10Ops = base10Ops.concat(sym)
    console.log(base10Ops)
    return base10Ops
}

btnsContainer.addEventListener('click', (e) => {

    switch (e.target.id) {
        case 'btn0':
            base2Num = base2Num.concat(0)
            updateData(0)
            break;
        case 'btn1': 
        base2Num = base2Num.concat(1)
            updateData(1)
            break;
        case 'btnSum':
            convertTo10(base2Num, '+')
            base2Num = ''
            updateData('+')
            
            break;
        case 'btnSub': 
        convertTo10(base2Num, '-')
        base2Num = ''
            updateData('-')
            break;
        case 'btnMul': 
            convertTo10(base2Num, '*')
            updateData('*')
            base2Num = ''
            break;
        case 'btnDiv':
            convertTo10(base2Num, '/') 
            updateData('/')
            base2Num = ''
            break
        case 'btnClr': 
            resCont.innerHTML = ''
            base10Ops = ''
            base2Num = ''
            break;
        case 'btnEql':
            
            base10Ops = base10Ops.concat(parseInt(base2Num, 2) )
            // console.log(base10Ops)
            let result =  eval(base10Ops)
            resCont.innerHTML = result.toString(2)
            break;
            
        default:
            console.log('wrong operation')
            break
           
    }
 
    console.log(e.target.id)
})