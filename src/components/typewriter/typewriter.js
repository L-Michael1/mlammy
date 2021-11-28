import React from 'react'
import { useState, useEffect } from 'react'

const Typewriter = ({ text, textColor, minTypeSpeed, maxTypeSpeed, initDelay }) => {

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
            <h1 style={{ color: textColor }}>{string}</h1>
        </div >
    )
}

export default Typewriter

Typewriter.defaultProps = {
    text: 'Text',
    textColor: '#000000',
    minTypeSpeed: 100,
    maxTypeSpeed: 120,
    initDelay: 300
}