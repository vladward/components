import React, {useEffect, useState} from "react"

type PropsType = {}

const GetTime = (number: number) => {
    return number < 10
        ? '0' + number
        : number
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

    return <div>
        <span>{GetTime(date.getHours())}</span>
        :
        <span>{GetTime(date.getMinutes())}</span>
        :
        <span>{GetTime(date.getSeconds())}</span>
    </div>
}