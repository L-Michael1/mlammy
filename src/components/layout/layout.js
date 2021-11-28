import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box, Center } from "@chakra-ui/react"
import styled from "styled-components"

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
      <Center>
        <main>{children}</main>
      </Center>
      <Center>
        <Footer>
          {data.site.siteMetadata?.title || `Title`} © {new Date().getFullYear()}
        </Footer>
      </Center>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Footer = styled.footer`
  margin-top: 3rem;
`

export default Layout
