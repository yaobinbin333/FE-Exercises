import V from './finishTemplate/v'

const v2 = new V().mounted(document.body)

v2.render(
    `<div>
    {{hello}}
    </div>`,
    {hello: "hello, world"}
)