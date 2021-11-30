import styled from 'styled-components'

export const Container = styled.div`
    margin-inline: auto;
    width: min(90%, 70rem);
`

export const SplitContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const SectionHeader = styled.h2`
    color: #DDEECC;
`