import React, {useState} from "react"
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion
}

const callBack = action('accordion mode change event fired')
const onClickCallBack = action('accordion item should be clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"}
                                                  collapsed={false}
                                                  onChange={callBack}
                                                  items={[]}
                                                  onClick={()=>{}}
/>

export const MenuUncollapsedMode = () => <Accordion titleValue={"Menu"}
                                                    collapsed={true}
                                                    onChange={callBack}
                                                    items={[
                                                        {title: 'Vlad', value: 1},
                                                        {title: 'Andrei', value: 2},
                                                        {title: 'Katya', value: 3},
                                                        {title: 'Ira', value: 4}
                                                    ]}
                                                    onClick={onClickCallBack}
/>

export const AccordionChanging = () => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    return <Accordion titleValue={"Clickable Menu"}
                      collapsed={accordionCollapsed}
                      onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                      items={[
                          {title: 'Vlad', value: 1},
                          {title: 'Andrei', value: 2},
                          {title: 'Katya', value: 3},
                          {title: 'Ira', value: 4}
                      ]}
                      onClick={onClickCallBack}
    />
}