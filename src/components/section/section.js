import React from 'react'
import { Container, SplitContainer, ContentContainer } from './section.styled'

const Section = ({ leftHeader, leftContent, rightHeader, rightContent }) => {
    return (
        <section>
            <Container>
                <SplitContainer>
                    <ContentContainer>
                        <h2>{leftHeader}</h2>
                        <p>{leftContent}</p>
                    </ContentContainer>
                    <ContentContainer>
                        <h2>{rightHeader}</h2>
                        <p>{rightContent}</p>
                    </ContentContainer>
                </SplitContainer>
            </Container>
        </section>
    )
}

export default Section