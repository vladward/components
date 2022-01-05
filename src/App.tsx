import React, {useState} from 'react'
import './App.css'
import {Accordion} from './components/Accordion/Accordion'
import {OnOff} from './components/OnOff/OnOff';
import {Rating, RatingValueType} from './components/Rating/Rating'
import {UseMemoStories} from "./Memo/UseMemo.stories";
import {Clock} from "./components/Clock/Clock";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)
    return (
        <div>
            <PageTitle title={"MyFriends"} />
            <PageTitle title={"Welcome to my app"} />

            <Accordion items={[]} onClick={() => {}} titleValue={"Clickable Menu"} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff value={on} onChange={setOn}/>
            <UseMemoStories/>
            <Clock mode={"analog"}/>
            <Clock mode={"digital"}/>
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
