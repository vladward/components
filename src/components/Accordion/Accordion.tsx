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
            <AccordionBody  collapsed={collapsed}/>
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsValue) {
    return <h3>{props.title}</h3>
}

type AccordionBodyPropsType = {
    collapsed: boolean
}


function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            {props.collapsed
                ? <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                : <></>
            }
        </div>
    )
}

export default Accordion