import React from 'react'
import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const Typewriter = ({ text, textColor, textAlign, minTypeSpeed, maxTypeSpeed, initDelay }) => {

    const Containter = styled.div`
        text-align: ${textAlign};
        margin: 1.5rem;
        display: flex;
        flex-direction: row;
    `
    const Text = styled.h1`
        margin: 0;
        color: ${textColor};
        &:before {
            content: '>  ';
        }
    `

    const blinkAnimation = keyframes`
        50% { background-color: transparent;}
    `

    const Blink = styled.span`
        background-color: ${textColor};
        animation: ${blinkAnimation} 1s steps(1) infinite;
    `

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
        <Containter>
            <Text>{string}</Text>
            <Blink>&nbsp;</Blink>
        </Containter>
    )
}

export default Typewriter

Typewriter.defaultProps = {
    text: 'Text',
    textAlign: 'left',
    textColor: '#000000',
    minTypeSpeed: 100,
    maxTypeSpeed: 120,
    initDelay: 300
}