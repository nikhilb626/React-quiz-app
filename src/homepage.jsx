import React from 'react';
import {Link} from "react-router-dom";
const HomePage = () => {
    return (
        <>
        <div className="score_section">
        <div className="home_heading">Welcome to Quiz</div>
        <div className="quiz_points">
        points to be noted:-
        <ul>
            <li>70% question should to correct to qualify the quiz</li>
            <li>You can't return from the middle of Quiz</li>
        </ul>
        </div>
        <div className="home_links">
        <Link to="/quiz" >Start Quiz</Link>
        </div>
        
      </div>
        </>
    )
}

export default HomePage;
