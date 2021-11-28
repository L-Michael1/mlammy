import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import Typewriter from "../components/typewriter/typewriter"
import styled from "styled-components"
import bepopGIF from '../gifs/404-smoke.gif'
import { StaticImage } from "gatsby-plugin-image"

const Description = styled.p`
  color: #FFFFFF;
  text-align: center;
`

const Gif = styled.img`
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 25px;
  width: 62%;
  height: auto;
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Typewriter text="404: Not Found" textAlign="center" textColor="#FFE8D6" initDelay={0} minTypeSpeed={60} maxTypeSpeed={70} />
    <Description>You just entered a nonexistent world...oh, so sad.</Description>
    <Gif
      src={bepopGIF}
      alt="Cowboy Bepop smoking gif"
    />
  </Layout>
)

export default NotFoundPage
