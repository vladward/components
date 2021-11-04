import React, {ChangeEvent, useRef, useState} from "react"
import {action} from "@storybook/addon-actions";

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
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef} />
        <button onClick={save}>
            save
        </button>
        actual value - {value}
    </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}



export const ControlledInputWithFixedValue = () => <input value={'123'}/>