import styled from 'styled-components'

export const Containter = styled.div`
    margin: 1.1rem;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1.5rem 1rem 1.3rem 1rem;
    padding: 0rem;
`

export const IconWrapper = styled.div`
    color: #FFFFFF;
    font-size: 1.5rem;
    margin: 1.45rem 1rem 1rem 1rem;
    padding: 0rem;
`

export const Heading = styled.h2`
    color: #FFFFFF;
    font-size: 1.5rem;
    
    @media (max-width: 480px) {
        font-size: 1.35rem;
    }

    @media (max-width: 320px) {
        font-size: 1.2rem;
    }

    @media (max-width: 240px) {
        font-size: 1rem;
    }
`