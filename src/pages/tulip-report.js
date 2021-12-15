import * as React from 'react'
import Seo from "../components/seo/seo"
import Layout from "../components/layout/layout"
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from '@chakra-ui/react'

const Header = styled.h1`
    font-size: 3rem;
`

const SubHeader = styled.h1`
    font-size: 2rem;
`

const Content = styled.p`
    font-size: 1.1rem;
`

const HomeButton = styled(Button)`
  background-color: #F54862;
  color: #FFFFFF;
  border-color: #F54862;
  width: 100%auto;
  transition: all 0.3s ease 0s;
  padding: 1.25rem;
  font-size: 1.20rem;
  margin-top: 1.5rem;

  :hover{
    transform: translateY(-3px);
    background-color: #f26e82;
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
            <SubHeader>Introduction</SubHeader>
            <Content>
                Tulip is a company that provides software as a service that aims at transforming retail
                into a digital setting. With Tulip’s solutions, retailers such as Chanel, Jimmy Choo, Kate
                Spade, and many more retail stores have the ability to strengthen the relationship between
                their brand and their customers. Tulip has multiple apps designed for iOS mobile devices for both sales
                associates and retail customers such as Assisted Selling, Clienteling, and Live Connect.
                Culture at Tulip is fantastic, friendly and helpful co-workers, great management, and a fun
                environment with a lot of non-work-related activities such as a weekly social gaming event, Festivus,
                and a yearly hackathon.
            </Content>
            <SubHeader>Goals</SubHeader>
            <Content>
                Going into this position, I had various goals both work-related and non-work-related:
                <ul>
                    <li>Learn new languages such as PHP, Go, and Swift, technologies such as Kubernetes, Docker,
                        and SQL, architectural patterns, and project management methodologies such as Scrum.</li>
                    <li>Improve verbal communication and collaborative skills.</li>
                    <li>Be able to balance the hardships of work and live a normal life.</li>
                </ul>
                These were the goals I had upon entering Tulip, and I completed two of them. Concerning
                my first goal, I wanted to learn three new languages: PHP, Go, and Swift. It was a tough
                goal for such a short work term. I developed my PHP skills quite nicely as it was the main language
                I worked in, as for Go, I got some exposure to the language, and I found it super interesting! As for
                Swift, I didn't get to touch because I never handled the iOS portion of things. This goal was
                an overreach, and I'll definitely learn to create goals that are more realistic and achievable in the
                near future. Overall, these skills are all very much transferrable to my future, not only technically,
                but also personally!
            </Content>
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
            <SubHeader>Conclusion</SubHeader>
            <Content>
                It was a wonderful first Co-op work term, I've finally stepped foot into the Computer Science/Software Engineering
                industry, and I was able to learn a ton! I'm glad, not only was I able to absorb a vast amount of technical
                knowledge from my colleagues, but I was also able to improve a lot of soft skills such as collaboration and communication.
                Though, the best thing I've got to say about Tulip is the friends and connections I made; they taught me more than I could
                have asked in the short time I was here, and I'm beyond grateful for them!
            </Content>
            <SubHeader>Acknowledgements</SubHeader>
            <Content>
                I would like to express my deepest appreciation to my team lead, and friend, Keaton Neville. Not only did he teach me a wide range of
                technical skills, but he also taught me how to better myself and I couldn't be more grateful. He was someone who understood me, and my mental
                wellbeing, he was someone who I could genuinely relate to, and he was someone that I looked up to. I don't think I've ever met a more genuine, relatable,
                and hard-working person in my entire life, and I've got to say, that he did change my life.
            </Content>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <HomeButton variant='solid'>
                    Home
                </HomeButton>
            </Link>
        </Layout>
    )
}

export default TulipReport