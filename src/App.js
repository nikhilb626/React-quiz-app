import React from 'react';
import Quiz from "./Quiz";
import HomePage from "./homepage";
import {Route} from "react-router-dom";

const App = () => {
    return (
        <div>  
    <Route path="/" component={HomePage} exact />
    <Route path="/quiz" component={Quiz} exact />
        </div>
    )
}

export default App;
