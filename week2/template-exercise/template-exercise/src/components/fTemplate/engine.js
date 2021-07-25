export default class Engine{
    render(temp, data){
        console.log(data)
        let newHtml = temp.replace(/\{{2}(.*?)\}{2}/mg, (match, s0) => {
            console.log('替换：',s0, data[s0])
            return data[s0.trim()]
        })
        return newHtml
    }
}