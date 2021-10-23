import React, {useState} from "react"

type onType = {
    on: boolean
}

const OnOff = (props: onType) => {

    const [on, setOn] = useState(false)

    const styleOn = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: on ? "green" : "red"
    }
    const styleOff = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "red" : "green"

    }
    const styleIndicator = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <div style={styleOn} onClick={ () => setOn(true)}>On</div>
            <div style={styleOff} onClick={ () => setOn(false)}>Off</div>
            <div style={styleIndicator}></div>
        </div>
    )
}

export default OnOff