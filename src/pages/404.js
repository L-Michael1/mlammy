import * as React from 'react'
import Seo from '../components/seo/seo'
import Typewriter from '../components/typewriter/typewriter'
import styled from 'styled-components'
import bepopGIF from '../gifs/404-smoke.gif'
import { Button } from '@chakra-ui/react'
import { Link } from 'gatsby'

const Description = styled.p`
  color: #FFFFFF;
  text-align: center;
`

const Gif = styled.img`
  margin: 3rem 2rem;
  border-radius: 25px;
  width: 54%;
  height: auto;
`

const HomeButton = styled(Button)`
  background-color: #DDEECC;
  color: #282931;
  border-color: #DDEECC;
  width: 100%auto;
  transition: all 0.3s ease 0s;
  padding: 1.25rem;
  font-size: 1.20rem;

  :hover{
    transform: translateY(-3px);
    background-color: #B9C8AB;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    padding: 0.6rem;
    font-size: 0.8rem;
  }

  @media (max-width: 240px) {
    padding: 0.6rem;
    font-size: 0.675rem;
  }
`

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <Typewriter text="404: Not Found" textAlign="center" textColor="#DDEECC" initDelay={0} minTypeSpeed={60} maxTypeSpeed={70} />
    <Description>You just entered a nonexistent world...oh, so sad.</Description>
    <Gif
      src={bepopGIF}
      alt="Cowboy Bepop smoking gif"
    />
    <Link to='/' style={{ textDecoration: 'none' }}>
      <HomeButton variant='solid'>
        Back to Homepage
      </HomeButton>
    </Link>
  </>
)

export default NotFoundPage
