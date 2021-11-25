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

    //cdm
    useEffect(() => {
        typeEffect();
    }, [])

    return (
        <div>
            {string}
            <span>&nbsp;</span>
        </div>
    )
}

export default Typewriter;