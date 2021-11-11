import React, {KeyboardEvent, useEffect, useState} from "react"
import s from './Select.module.css'

export type ItemsType = {
    title: string
    value: any
}

export type SelectPropsType = {
    items: ItemsType[]
    value?: any
    onChange: (value: any) => void
}

export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElValue, sethoveredElValue] = useState<boolean>(props.value)

    useEffect(() => {sethoveredElValue(props.value)}, [props.value])

    const selectedValue = props.items.find(i => i.value === props.value)
    const hoveredElItem = props.items.find(i => i.value === hoveredElValue)
    const toggleItems = () => {setActive(!active)}
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElValue) {
                    const pretendentElement = e.key === "ArrowDown"
                    ? props.items[i + 1]
                    : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if(!selectedValue) {
                props.onChange(props.items[0].value)
            }
        }
        if(e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }
    return (
        <>

            <select name="">
                <option value="">Moscow</option>
                <option value="">Minsk</option>
                <option value="">Kiew</option>
            </select>

            <div className={s.select}
                 onKeyUp={onKeyUp}
                 tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedValue && selectedValue.title}</span>
                {active &&
                <div className={s.items}>
                    {props.items.map(i => <div onMouseEnter={() => sethoveredElValue(i.value)}
                                               key={i.value}
                                               onClick={() => {
                                                   onItemClick(i.value)
                                               }}
                                               className={s.item + ' ' + (hoveredElItem === i ? s.selected : '')}
                    >{i.title}</div>)}
                </div>}
            </div>
        </>
    )
}