import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import Typewriter from "../components/typewriter/typewriter"
import styled from "styled-components"

const Description = styled.p`
  color: #FFFFFF;
`

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Typewriter text="404: Not Found" textColor="#FFE8D6" initDelay={0} minTypeSpeed={60} maxTypeSpeed={70} />
    <Description>You just entered a nonexistent world...oh, so sad.</Description>
  </Layout>
)

export default NotFoundPage
