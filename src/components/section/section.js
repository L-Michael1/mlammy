import React from 'react'
import { Container, SplitContainer, ContentContainer } from './section.styled'

const Section = ({ leftContent, rightContent }) => {
    return (
        <section>
            <Container>
                <SplitContainer>
                    <ContentContainer>
                        {leftContent}
                    </ContentContainer>
                    <ContentContainer>
                        {rightContent}
                    </ContentContainer>
                </SplitContainer>
            </Container>
        </section>
    )
}

export default Section