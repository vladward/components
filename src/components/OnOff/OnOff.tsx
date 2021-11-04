import React from "react"

export type onType = {
    value: boolean
    onChange: (value: boolean) => void
}

const OnOff = (props: onType) => {
    const styleOn = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: props.value ? "green" : "white",
        cursor: "pointer"
    }
    const styleOff = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.value ? "white" : "red",
        cursor: "pointer"

    }
    const styleIndicator = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.value ? "green" : "red"
    }

    return (
        <div>
            <div style={styleOn} onClick={ () => props.onChange(!props.value)}>On</div>
            <div style={styleOff} onClick={ () => props.onChange(!props.value)}>Off</div>
            <div style={styleIndicator}></div>
        </div>
    )
}

export default OnOff