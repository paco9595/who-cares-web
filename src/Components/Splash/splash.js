import React from 'react'
import { Link } from 'react-router-dom';
import './splash.css';

export const Splash = props => {
    return (
        <div className={"splash"}>
            <h1>Splash</h1>
            <Link to="/registration">Start quizz</Link>
        </div>
    )
}