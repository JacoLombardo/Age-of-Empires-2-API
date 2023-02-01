import React, { useState } from 'react';
import Civilizations from '../components/Civilizations';
import Units from '../components/Units';
import Technologies from '../components/Technologies';
import Buildings from '../components/Buildings';

type Props = {}

export default function Homepage(props: Props) {
    const [showCiv, setShowCiv] = useState(true);
    const [showUnit, setShowUnit] = useState(false);
    const [showTech, setShowTech] = useState(false);
    const [showBuild, setShowBuild] = useState(false);

    const ShowCivilizations = () => {
        setShowCiv(true);
        setShowUnit(false);
        setShowTech(false);
        setShowBuild(false);
    };
    const ShowUnits = () => {
        setShowCiv(false);
        setShowUnit(true);
        setShowTech(false);
        setShowBuild(false);
    };
    const ShowTechnologies = () => {
        setShowCiv(false);
        setShowUnit(false);
        setShowTech(true);
        setShowBuild(false);
    };
    const ShowBuildings = () => {
        setShowCiv(false);
        setShowUnit(false);
        setShowTech(false);
        setShowBuild(true);
    };


    return (
        <>
            <div className='homepageDiv'>
                <h1>Welcome to the Age of Empires 2 API Documentation</h1>
                <p>The endpoints are the same for every category but I'll present them all just in case :)</p>
                <div className='buttonsDiv'>
                    <button onClick={ShowCivilizations}>Civilizations</button>
                    <button onClick={ShowUnits}>Units</button>
                    <button onClick={ShowTechnologies}>Technologies</button>
                    <button onClick={ShowBuildings}>Buildings</button>
                </div>
                {showCiv && <Civilizations />}
                {showUnit && <Units />}
                {showTech && <Technologies />}
                {showBuild && <Buildings />}
            </div>
        </>
    )
};