import React from 'react'
import './App.css'
import Accordion from './components/Accordion/Accordion'
import OnOff from './components/OnOff/OnOff';
import {Rating} from './components/Rating/Rating'

function App() {
    return (
        <div>
            <PageTitle title={"MyFriends"} />
            <PageTitle title={"Welcome to my app"} />

            <Accordion titleValue={"Clickable Menu"} />

            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />
            <Rating />

            <OnOff />
            <OnOff />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
