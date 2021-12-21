import React, {useState} from "react"


const GetTime = (number: number) => {
    return number < 10
        ? '0' + number
        : number
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState<Date>(new Date)

    return <div>
        <span>{GetTime(date.getHours())}</span>
        :
        <span>{GetTime(date.getMinutes())}</span>
        :
        <span>{GetTime(date.getSeconds())}</span>
    </div>
}