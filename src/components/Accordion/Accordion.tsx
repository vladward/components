import React from "react"

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}
type AccordionTitlePropsValue = {
    title: string
}

function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    }

}

function AccordionTitle(props: AccordionTitlePropsValue) {
    return <h3>{props.title}</h3>
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion