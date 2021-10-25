import React, {useState} from 'react'
import './App.css'
import Accordion from './components/Accordion/Accordion'
import OnOff from './components/OnOff/OnOff';
import {Rating, RatingValueType} from './components/Rating/Rating'

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)
    return (
        <div>
            <PageTitle title={"MyFriends"} />
            <PageTitle title={"Welcome to my app"} />

            <Accordion titleValue={"Clickable Menu"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff value={on} onClick={setOn}/>
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
