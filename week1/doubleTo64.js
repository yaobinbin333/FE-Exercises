const Base64Code = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', '+', '/', '=']

/**
 * 浮点数转小数
 * @param x 小数
 */
const transform = function (x){
    const twoPart = String(x).split('.')
    if(twoPart.length > 2){
        console.log('这个数不是合法小数')
        return
    }
    let integerStr = integerTransform(twoPart[0], 64)
    if(twoPart.length === 1){
        console.log(integerStr)
        return integerStr
    }
    // 小数部分因为有前置0的部分，所以就先转换成二进制，然后每6位计算一次
    let binary = x % 1, frac = "", fractionStr = ""
    // 转二进制
    while (binary != 0 && frac.length < 65){
        binary *= 2
        let num = Math.floor(binary)
        frac += num
        binary = binary % 1
    }
    frac = frac.split('').reverse().join()
    // 补充长度为6的倍数
    while(frac.length % 6 !== 0){
        frac += '0'
    }
    for(let i = 0; i < frac.length; i += 6){
        let part = frac.slice(i, i + 6)
        let b64 = parseInt(part, 2)
        fractionStr += Base64Code[b64]
    }
    return `${integerStr}.${fractionStr}`
}

/**
 * 10进制转成target进制, 返回一个字符串
 * @param x: 字符串
 * @param target: 对应的进制
 */
const integerTransform = function (x, target){
    let ans = "", minus = false
    if(x[0] === '-'){
        x = x.slice(1)
        minus = true
    }
    x = Number(x)
    while(x > 0){
        ans += Base64Code[x % target]
        x = x / target | 0
    }
    ans = ans.split('').reverse().join('')
    return ans
}
let res = transform(64.001)
console.log(res)