let str = `<div>
    {{hello}}{{dd}}
    </div>`

let r1 = /\{{2}(.*?)\}{2}/mg
// console.log(str.match(r1))
let obj = {
    'hello': 'hello123',
    'dd': 'dd123'
}
let s2 = str.replace(r1, (match, s0) => {
    console.log(match, s0)
    return obj[s0]
})
console.log(s2)
console.log("x-x_".match(/(x_*)|(-)/g))

