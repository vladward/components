import React, {useState} from "react"

type AccordionPropsType = {
    titleValue: string,
}
type AccordionTitlePropsValue = {
    title: string
}

function Accordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={ collapsed ? () => setCollapsed(false) : () => setCollapsed(true) }>TOGGLE</button>
            {collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsValue) {
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    return (
        <div>
              <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
        </div>
    )
}

export default Accordion