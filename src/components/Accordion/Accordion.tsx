import React, {useState} from "react"

type AccordionPropsType = {
    titleValue: string
}
type AccordionTitlePropsValue = {
    title: string
    onClick: () => void
}

function Accordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={ () => setCollapsed(!collapsed) }/>
            {collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsValue) {
    return <h3 onClick={() => { props.onClick() }}>{props.title}</h3>
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