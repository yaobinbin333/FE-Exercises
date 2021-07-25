export default class Engine{
    render(temp, data){
        let newHtml = temp.replace(/\{{2}(.*?)\{{2}/mg, (match, s0) => {
            return data[s0]
        })
        return newHtml
    }
}