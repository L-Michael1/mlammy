import React from 'react'
import { useState, useEffect } from 'react';

const Typewriter = ({ text, minTypeSpeed, maxTypeSpeed, initDelay }) => {

    const [string, setString] = useState();

    const typeEffect = () => {
        let initString = '';
        let typeSpeed = 0;

        text.split('').forEach(char => {
            typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed;
            setTimeout(() => {
                initString += char;
                setString(initString);
            }, initDelay + typeSpeed)
        })
    }

    useEffect(() => {
        typeEffect();
    }, [])

    return (
        <div>
            <h1>{string}</h1>
            <span style={{ backgroundColor: "blue" }}>&nbsp;</span>
        </div>
    )
}

export default Typewriter;