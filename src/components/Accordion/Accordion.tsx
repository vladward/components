import React from "react"

type ItemsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemsType[]
    onClick: (value: string) => void
}
export type AccordionTitlePropsValue = {
    title: string
    collapsed: boolean
    onChange: () => void
}
export type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: string) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed={props.collapsed}/>
            {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsValue) {
    return <h3 style={{ cursor: 'pointer' }} onClick={(e) => props.onChange()}>
        {props.title}
    </h3>
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map( (i, index) => <li key={index} style={{cursor: 'pointer'}} onClick={() => props.onClick(i.value)}>{i.title}</li>)}
            </ul>
        </div>
    )
}