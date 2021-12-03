import styled from 'styled-components'

export const Container = styled.div`
    margin-inline: auto;
    width: min-content(100%, 70rem);
`

export const SplitContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 720px) {
        flex-direction: column;
    }
`

export const ContentContainer = styled.div`
    margin: 0rem 1.2rem;
    width: min(100%, 70rem);
`