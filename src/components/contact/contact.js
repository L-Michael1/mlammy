import React from 'react'
import { Link } from 'gatsby'
import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiFilePaper2Fill } from 'react-icons/ri'
import { Container, IconWrapper } from './contact.styled'

const Contact = () => {
    return (
        <Container>
            <IconWrapper>
                <Link to='https://github.com/L-Michael1' target='_blank'>
                    <GoMarkGithub color='#DDEECC' size='2rem' />
                </Link>
            </IconWrapper>
            <IconWrapper>
                <Link to='https://www.linkedin.com/in/mlam977/' target='_blank'>
                    <FaLinkedin color='#DDEECC' size='2rem' />
                </Link>
            </IconWrapper>
            <IconWrapper>
                <a href='mailto:m.lam08@outlook.com'>
                    <MdEmail color='#DDEECC' size='2rem' />
                </a>
            </IconWrapper>
            {/* WIP NEED TO ADD RESUME */}
            <IconWrapper>
                <RiFilePaper2Fill color='#DDEECC' size='2rem' />
            </IconWrapper>
        </Container>
    )
}

export default Contact
