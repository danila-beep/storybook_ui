import React from 'react';
import './App.css';
import Radio from "./components/Selectors/Radio";
import Toggler from "./components/Selectors/Toggler";
import Checkbox from "./components/Selectors/Checkbox";

function App() {
    return (
        <div className={"App"}>
            <Checkbox />
            <Checkbox title={"Checkbox Title"} description={"description"}/>
            <Checkbox variant={"large"}/>
            <Checkbox error/>
            <Checkbox disabled/>
            <Checkbox error disabled/>
            <Checkbox checked disabled/>
        </div>
    );
}

export default App;
