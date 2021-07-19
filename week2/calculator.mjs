
const calculate = function (str){
    let res = 0, curRes = 0, op = '+', num = 0, n = str.length
    for(let i = 0; i < n; i++){
        let c = str[i]
        if(c >= '0' && c <= '9') num = num * 10 + (c - '0')
        else if(c === '('){
            let j = i, cnt = 0
            for(; i < n; i++){
                if(str[i] === '(') cnt++
                else if(str[i] === ')') cnt--
                if(cnt === 0) break
            }
            num = calculate(str.slice(j + 1, i))
        }
        if(c === '+' || c === '-' || c === '*' || c === '/' || Number(i) === n - 1){
            switch (op){
                case '+': curRes += num; break;
                case '-': curRes -= num; break;
                case '*': curRes *= num; break;
                case '/': {
                    let p1 = curRes / num
                    let strP1 = p1 + ''
                    if(strP1.length - strP1.indexOf('.') - 1 > 2) curRes = (curRes / num).toFixed(2)
                    else curRes /= num
                    break
                }
            }
            if(c === '+' || c === '-' || Number(i) === n - 1){
                res += curRes
                curRes = 0
            }
            op = c, num = 0
        }
    }
    return res
}
console.log(calculate('4/(9+1)'))

export {calculate}