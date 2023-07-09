import React from 'react';
import './App.css';
import SocialButtons from "./components/Buttons/SocialButtons";
import {UilApple, UilGithub, UilGooglePlay} from "@iconscout/react-unicons";
import Rating from "./components/Buttons/Rating";
import Toggler from "./components/Selectors/Toggler";

function App() {
    return (
        <div className={"App"}>
            <Toggler />
        </div>
    );
}

export default App;
