import React from 'react'
import { Container, SplitContainer, SectionHeader } from './section.styled'

const Section = ({ leftHeader, leftContent, rightHeader, rightContent }) => {
    return (
        <section>
            <Container>
                <SplitContainer>
                    <div>
                        <SectionHeader>{leftHeader}</SectionHeader>
                        <p>{leftContent}</p>
                    </div>
                    <div>
                        <SectionHeader>{rightHeader}</SectionHeader>
                        <p>{rightContent}</p>
                    </div>
                </SplitContainer>
            </Container>
        </section>
    )
}

export default Section