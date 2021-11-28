import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import Typewriter from "../components/typewriter/typewriter"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Description = styled.p`
  color: #FFFFFF;
  text-align: center;
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Typewriter text="404: Not Found" textAlign="center" textColor="#FFE8D6" initDelay={0} minTypeSpeed={60} maxTypeSpeed={70} />
    <Description>You just entered a nonexistent world...oh, so sad.</Description>
    <StaticImage
      src="../images/404.png"
      width={350}
      height={350}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="Sad anime character"
      style={{ marginTop: `3rem`, borderRadius: `25px` }}
    />
  </Layout>
)

export default NotFoundPage
