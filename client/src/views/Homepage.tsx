import React, { useState } from 'react';
import Civilizations from '../components/Civilizations';
import Units from '../components/Units';
import Technologies from '../components/Technologies';
import Buildings from '../components/Buildings';

export default function Homepage() {
    const [show, setShow] = useState("civilization");

    const handleClick = (e: any) => {
        setShow(e.target.id);
    };

    return (
        <>
            <div className='homepageDiv'>
                <h1>Welcome to the Age of Empires 2 API Documentation</h1>
                <p>The endpoints are the same for every category but I'll present them all just in case :)</p>
                <br />
                <div className='buttonsDiv'>
                    <button id='civilization' onClick={handleClick}>Civilizations</button>
                    <button id='unit' onClick={handleClick}>Units</button>
                    <button id='technology' onClick={handleClick}>Technologies</button>
                    <button id='building' onClick={handleClick}>Buildings</button>
                </div>
                {show === "civilization" && <Civilizations />}
                {show === "unit" && <Units />}
                {show === "technology" && <Technologies />}
                {show === "building" && <Buildings />}
            </div>
        </>
    )
};