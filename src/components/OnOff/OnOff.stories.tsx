import React, {useState} from "react"
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff
}

const callBack = action('on or off clicked')

export const OffMode = () => <OnOff value={false} onChange={callBack}/>
export const OnMode = () => <OnOff value={true} onChange={callBack}/>
export const OnOffChanging = () => {
    const [on, setOn] = useState<boolean>(false)
    return <OnOff value={on} onChange={setOn}/>
}