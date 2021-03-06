import * as React from 'react'
import Seo from "../components/seo/seo"
import Layout from "../components/layout/layout"
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@chakra-ui/react'

const Header = styled.h1`
    color: #FFFFFF;
    font-size: 3rem;
`

const SubHeader = styled.h1`
    color: #f26e82;
    font-size: 2rem;
`

const Content = styled.p`
    font-size: 1.1rem;
`

const Container = styled.div`
    padding: 1.5rem;
`

const HomeButton = styled(Button)`
  background-color: #F54862 !important;
  color: #FFFFFF !important;
  border-color: #F54862 !important;
  width: 100%auto;
  transition: all 0.3s ease 0s;
  padding: 1.25rem;
  font-size: 1.20rem;
  margin-top: 1.5rem;

  :hover{
    transform: translateY(-3px);
    background-color: #f26e82 !important;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    padding: 0.6rem;
    font-size: 0.8rem;
  }

  @media (max-width: 240px) {
    padding: 0.6rem;
    font-size: 0.675rem;
  }
`

const TulipReport = () => {
    return (
        <Layout>
            <Seo title="Tulip Report" />
            <Header>Tulip</Header>
            <StaticImage
                src={"../images/tulip.png"}
                width={200}
                height={"auto"}
                quality={50}
                formats={["auto", "webp", "avif"]}
                alt="Tulip"
                style={{ marginTop: `2rem`, marginBottom: `1.5rem`, borderRadius: `25px` }}
            />
            <Container>
                <SubHeader>Introduction</SubHeader>
                <Content>
                    Tulip is a company that provides software as a service that aims at transforming retail
                    into a digital setting. With Tulip’s solutions, retailers such as Chanel, Jimmy Choo, Kate
                    Spade, and many more retail stores can strengthen the relationship between
                    their brand and their customers. Tulip has multiple apps designed for iOS mobile devices for both sales
                    associates and retail customers such as Assisted Selling, Clienteling, and Live Connect.
                    Culture at Tulip is fantastic, friendly and helpful co-workers, great management, and a fun
                    environment with a lot of non-work-related activities such as a weekly social gaming event, Festivus,
                    and a yearly hackathon.
                </Content>
            </Container>

            <Container>
                <SubHeader>Goals</SubHeader>
                <Content>
                    Going into this position, I had various goals both work-related and non-work-related:
                    <br /> <br />
                    <div>
                        <ul>
                            1. Learn new languages such as PHP, Go, and Swift, technologies such as Kubernetes, Docker,
                            and SQL, architectural patterns, and project management methodologies such as Scrum.
                            <br />
                            2. Improve verbal communication and collaborative skills.
                            <br />
                            3. Be able to balance the hardships of work and live a normal life.
                        </ul>
                    </div>
                    <br />
                    These were the goals I had upon entering Tulip, and I completed two of them. Concerning
                    my first goal, I wanted to learn three new languages: PHP, Go, and Swift. It was a tough
                    goal for such a short work term. I developed my PHP skills quite nicely as it was the main language
                    I worked in, as for Go, I got some exposure to the language, and I found it super interesting! As for
                    Swift, I didn't get to touch because I never handled the iOS portion of things. This goal was
                    an overreach, and I'll learn to create goals that are more realistic and achievable in the
                    near future. Overall, these skills are all very much transferrable to my future, not only technically,
                    but also personally!
                </Content >
            </Container >
            <Container>
                <SubHeader>Job Description</SubHeader>
                <Content>
                    I was a part of the Checkout Team, working as a Backend Developer solving a variety of problems and
                    bugs to increase customer satisfaction and to optimize the Checkout app. I worked mainly in PHP and MySQL, wrote
                    unit tests in Python, and did a few small things in Go. The main skills needed for this job were communication
                    and collaboration not only in my team but also across other teams at Tulip. I found that these skills were not taught
                    specifically in my program, and I learned to better communicate and collaborate while on the job and through colleagues. What I found unique
                    about my job was that we worked super closely with Chanel on the Checkout team. A large part of our work items each sprint
                    were Chanel-related, which I found very intriguing since I got to work with such a large brand!
                </Content>
            </Container>
            <Container>
                <SubHeader>Conclusion</SubHeader>
                <Content>
                    It was a wonderful first Co-op work term, I've finally stepped foot into the Computer Science/Software Engineering
                    industry, and I was able to learn a ton! I'm glad, not only was I able to absorb a vast amount of technical
                    knowledge from my colleagues, but I was also able to improve a lot of soft skills such as collaboration and communication.
                    Though, the best thing I've got to say about Tulip is the friends and connections I made; they taught me more than I could
                    have asked in the short time I was here, and I'm beyond grateful for them!
                </Content>
            </Container>
            <Container>
                <SubHeader>Acknowledgements</SubHeader>
                <Content>
                    I would like to express my sincere gratitude to my Development Team Lead/Manager, Keaton Neville, for providing invaluable guidance and
                    knowledge during my work term. His wide range of technical skills, compassion and sincerity towards others, and motivation to help push
                    the company in the right direction were all very inspiring to me. Though, his humour and friendship were the two things I will never
                    forget. He was someone who understood others and treated the whole team with sincerity. I am extremely grateful for the job opportunity and
                    team members I got to work with this term. I was able to gain knowledge from every team member, and coming out of this work term, I
                    feel more educated and prepared for my future.
                </Content>
            </Container>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <HomeButton variant='solid'>
                    Home
                </HomeButton>
            </Link>
        </Layout >
    )
}

export default TulipReport