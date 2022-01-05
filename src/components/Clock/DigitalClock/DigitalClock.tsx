import React from "react";
import {ClockPropsType} from "../Clock";

export const GetTime = (number: number) => {
    return number < 10 ? '0' + number : number
}

export const DigitalClock: React.FC<ClockPropsType> = ({date}) => {
    return <div style={{marginLeft: '30px'}}>
        <span>{GetTime(date.getHours())}</span>
        :
        <span>{GetTime(date.getMinutes())}</span>
        :
        <span>{GetTime(date.getSeconds())}</span>
    </div>
}