import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Particles from "react-particles-js"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Center, ScaleFade } from "@chakra-ui/react"
import { options } from "./particles"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box maxWidth={960} margin='auto'>
      <Particles params={options} />
      <ScaleFade in={true} initialScale={0.45}>
        <Center flexDirection="column">
          {children}
        </Center>
        <Center>
          <Footer>
            {data.site.siteMetadata?.title || `Title`} © {new Date().getFullYear()}
          </Footer>
        </Center>
      </ScaleFade>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Footer = styled.footer`
  margin-top: 3rem;
  color: #DDEECC;
`

export default Layout
