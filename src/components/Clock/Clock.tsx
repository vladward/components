import React, {useEffect, useState} from "react"
import {DigitalClock} from "./DigitalClock/DigitalClock";
import {AnalogClock} from "./AnalogClock/AnalogClock";

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState<Date>(new Date)

    useEffect(() => {
        console.log('date')
        let start = setInterval(() => {
                console.log('tick')
                setDate(new Date)
            }, 1000)
        return () => {clearInterval(start)} // componentWillUnmount()
    }, [])

    let clockMode;
    switch(props.mode) {
        case "analog":
            clockMode = <AnalogClock date={date}/>
            break;
        case "digital":
        default:
            clockMode = <DigitalClock date={date}/>
    }

    return <div>
        {clockMode}
    </div>
}

export type ClockPropsType = {
    date: Date
}