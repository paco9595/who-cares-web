import React from 'react'
import { getCookie } from '../localStorageHandler';
import { Link } from 'react-router-dom';
import { Planet } from 'react-kawaii';

import './splash.css';

export const Splash = props => {
    const userCookie = getCookie();
    console.log(userCookie, 'user cookie');
    return (
        <div className={"splash"}>
            <h4>who cares?</h4>
            <Animation />
            <h2>we do</h2>
            <Link to="/registration">Start quizz</Link>
        </div>
    )
}

const Animation = props => {
    return (
        <div className="animationContainer">
            <div className={"mainPlanet"}>
                <Planet size={200} mood="sad" color="#FDA7DC" />
            </div>
            <div className={"bounginPlanet"}>
                <Planet size={200} mood="happy" color="#FDA7DC" />
            </div>
            <div className={"spinningPlanet"}>
                <Planet size={200} mood="blissful" color="#FDA7DC" />
            </div>
            <div className={"spinningPlanet"}>
                <Planet size={200} mood="happy" color="#FDA7DC" />
            </div>
        </div>
    )
}