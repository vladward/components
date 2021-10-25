import React, {useState} from "react"

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}
type AccordionTitlePropsValue = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsValue) {
    return <h3 onClick={ () => {props.onClick(!props.collapsed)} }>{props.title}</h3>
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