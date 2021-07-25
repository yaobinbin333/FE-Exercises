import Engine from './engine'
export default class Template{
    constructor() {
        this.root = null
        this.engine = new Engine()
    }
    parseElement(htmlString){
        return new DOMParser().parseFromString(htmlString,'text/html').body.childNodes[0]
    }

    render(template, data){
        let dom = this.engine.render(template, data)
        console.log(dom)
        this.root.appendChild(this.parseElement(dom))
    }

    mounted(dom){
        this.root = dom
        return this
    }
}