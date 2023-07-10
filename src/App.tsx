import React from 'react';
import './App.css';
import Radio from "./components/Selectors/Radio";
import Toggler from "./components/Selectors/Toggler";

function App() {
    return (
        <div className={"App"}>
            <Radio title={"Title"} description={"Description"} disabled checked/>
        </div>
    );
}

export default App;
