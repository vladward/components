import React from "react"

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}
export type AccordionTitlePropsValue = {
    title: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed={props.collapsed}/>
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsValue) {
    return <h3 onClick={(e) => props.onChange()}>
        {props.title}
    </h3>
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