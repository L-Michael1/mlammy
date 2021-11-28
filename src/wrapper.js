import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Layout from './components/layout/layout'

export const wrapPageElement = ({ element }) => {
    return (
        <ChakraProvider resetCSS={false}>
            <Layout>{element}</Layout>
        </ChakraProvider>
    )
}