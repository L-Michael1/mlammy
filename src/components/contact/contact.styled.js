import { Link } from 'gatsby'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`

export const IconWrapper = styled.div`
    margin: 0rem 1rem;

    transition: all 0.3s ease 0s;
    &:hover {
        cursor: default;
        transform: translateY(-5px);
        color: #000000 !important;
    }
`