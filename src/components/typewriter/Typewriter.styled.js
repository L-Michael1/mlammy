import styled, { keyframes } from 'styled-components'

export const Containter = styled.div`
        text-align: ${textAlign};
        margin: 1.5rem;
        display: flex;
        flex-direction: row;
    `

export const Text = styled.h1`
        margin: 0;
        color: ${textColor};
        &:before {
            content: '>  ';
        }
    `

export const blinkAnimation = keyframes`
        50% { background-color: transparent;}
    `

export const Blink = styled.span`
        background-color: ${textColor};
        animation: ${blinkAnimation} 1s steps(1) infinite;
    `