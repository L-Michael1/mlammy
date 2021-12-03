import styled from 'styled-components'
import { Link } from 'gatsby'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const IconWrapper = styled.div`
    color: #DDEECC;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-right: 1rem;
    padding: 0rem;
`

export const SubIconWrapper = styled.div`
    color: #FFFFFF;
    font-size: 1.3rem;
    margin-top: 1.3rem;
    margin-right: 0.8rem;
    padding: 0rem;
`

export const SubHeading = styled.h3`
    margin: 0rem;
`

export const SubHeadingLink = styled(Link)`
    margin: 0;
    display: flex;
    color: #FFFFFF;
    text-decoration: none;
    transition: all 1s ease 0s;

    :hover{
        color: #B9C8AB;
        text-decoration: underline;
    }
`