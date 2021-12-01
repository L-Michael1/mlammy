import React from 'react'
import { Heading, Containter, IconWrapper } from './header.styled'
import { IoMdSchool } from 'react-icons/io'
import { AiOutlineCode } from 'react-icons/ai'

const Header = () => {
    return (
        <Containter>
            <IconWrapper>
                <IoMdSchool />
            </IconWrapper>
            <Heading>
                Third Year Computer Science Student at the University of Guelph
            </Heading>
            <IconWrapper>
                <AiOutlineCode />
            </IconWrapper>
        </Containter>
    )
}

export default Header