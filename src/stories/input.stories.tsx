import React, {ChangeEvent, useRef, useState} from "react"

export default {
    title: 'input stories',
    //component: input
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }
    return <> <input onChange={onChange}/> {value}</>
}

export const ControlledInputWithFixedValue = () => <input value={'123'}/>