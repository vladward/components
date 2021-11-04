import React, {useState} from "react"
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion
}

const callBack = action('accordion mode change event fired')

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"}
                                                  collapsed={false}
                                                  onChange={callBack}
/>
export const MenuUncollapsedMode = () => <Accordion titleValue={"Menu"}
                                                    collapsed={true}
                                                    onChange={callBack}
/>
export const AccordionChanging = () => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    return <Accordion titleValue={"Clickable Menu"}
                      collapsed={accordionCollapsed}
                      onChange={() => setAccordionCollapsed(!accordionCollapsed)}
    />
}