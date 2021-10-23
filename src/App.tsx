import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from './components/Rating/Rating';

function App() {
    return (
        <div>
            <PageTitle title={"MyFriends"} />
            <PageTitle title={"Welcome to my app"} />
            <Accordion titleValue={"Menu"} collapsed={false} />
            <Accordion titleValue={"Users"} collapsed={true} />
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
