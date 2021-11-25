import React from 'react'
import { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {

    const [string, setString] = useState();

    const typeEffect = () => {
        let initString = '';
        let typeSpeed = 0;
        let minTypeSpeed = 50;
        let maxTypeSpeed = 90;
        let initDelay = 700;

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
            {string}
            <span>&nbsp;</span>
        </div>
    )
}

export default Typewriter;