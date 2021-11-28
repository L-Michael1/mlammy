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
  background-color: #FFE8D6;
  color: #282931;
  border-color: #FFE8D6;
  width: 100%auto;

  :hover{
    background-color: #DDBEA9;
    cursor: pointer;
  }
`

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <Typewriter text="404: Not Found" textAlign="center" textColor="#FFE8D6" initDelay={0} minTypeSpeed={60} maxTypeSpeed={70} />
    <Description>You just entered a nonexistent world...oh, so sad.</Description>
    <Gif
      src={bepopGIF}
      alt="Cowboy Bepop smoking gif"
    />
    <Link to='/' style={{ textDecoration: 'none' }}>
      <HomeButton variant='solid' size='md'>
        Back to Homepage
      </HomeButton>
    </Link>
  </>
)

export default NotFoundPage
