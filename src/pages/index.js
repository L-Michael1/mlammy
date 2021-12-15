import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from 'styled-components'

// Components
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import Typewriter from "../components/typewriter/typewriter"
import Contact from '../components/contact/contact'
import Section from '../components/section/section'
import Header from '../components/header/header'

// Icons
import { MdWork } from 'react-icons/md'
import { AiOutlineLink } from 'react-icons/ai'
import { FaLaptopCode } from "react-icons/fa"
import { AiFillProject } from "react-icons/ai"
import { IoMdSchool } from 'react-icons/io'
import { HiOutlineDocumentReport } from "react-icons/hi"


const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 1.5rem;
`

const Heading = styled.h2`
    font-size: 1.5rem;
`

const SubHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const SubHeading = styled.h3`
    font-size: 1.15rem;
    font-weight: 700;
`

const ContentContainer = styled.div`
    padding-bottom: 1.5rem;
`

const Date = styled.h4`
    color: #DDEECC;
`

const IconWrapper = styled.div`
    color: #DDEECC;
    font-size: 1.6rem;
    margin-top: 0.22rem;
    margin-right: 1rem;
    padding: 0rem;
`

const SubIconWrapper = styled.div`
    color: #FFFFFF;
    font-size: 1.3rem;
    margin-top: 0.2rem;
    margin-right: 0.6rem;
    padding: 0rem;
`

const SubHeadingLink = styled(Link)`
    margin: 0;
    display: flex;
    color: #FFFFFF;
    text-decoration: none;
    transition: all 1s ease 0s;

    :hover{
        color: #B9C8AB;
        text-decoration: underline;
    }
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/mlam.png"
      width={250}
      height={"auto"}
      quality={50}
      formats={["auto", "webp", "avif"]}
      alt="Michael Lam"
      style={{ marginTop: `2rem`, marginBottom: `1.5rem`, borderRadius: `25px` }}
    />
    <Typewriter textColor='#FFFFFF' text='Michael Lam' textAlign='inline' />
    <Contact />
    <Header />

    {/* Section 1 */}
    <Section leftContent={[
      <HeaderContainer>
        <IconWrapper>
          <MdWork />
        </IconWrapper>
        <Heading>Work Experience</Heading>
      </HeaderContainer>,
      <HeaderContainer>
        <SubHeadingLink to='https://tulip.com' target='_blank'>
          <SubIconWrapper>
            <AiOutlineLink />
          </SubIconWrapper>
          <SubHeading>Tulip</SubHeading>
        </SubHeadingLink>
      </HeaderContainer>,
      <div>
        <p>
          <b>Backend Software Developer - Checkout</b> <br />
          Guelph, Ontario <br />
          <Date>Sep 2021 - Dec 2021</Date> <br />
          Tulip is a company that provides software as a service that aims at digitizing retail. At Tulip, I was
          part of the Checkout team working as a Backend Software Developer. I worked on a range of tasks such as:
          creating backend endpoints in PHP, SQL query optimizations, reducing time complexity within
          codebase, optimizing a metric dashboard for API requests in Grafana, reducing PHP errors/warnings
          by 80% in GCP logs, bug fixes, and more.
        </p>
      </div>
    ]}
      rightContent={[
        <HeaderContainer>
          <IconWrapper>
            <FaLaptopCode />
          </IconWrapper>
          <Heading>Technical Skills</Heading>
        </HeaderContainer>,
        <Section
          leftContent={[
            <SubHeaderContainer>
              <SubHeading>Languages</SubHeading>
            </SubHeaderContainer>,
            <ContentContainer>
              <ul>
                <li>C</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>HTML5/CSS3</li>
                <li>TypeScript</li>
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
            </ContentContainer>,
            <SubHeaderContainer>
              <SubHeading>Frameworks</SubHeading>
            </SubHeaderContainer>,
            <ContentContainer>
              <p>
                <ul>
                  <li>React</li>
                  <li>Node.js</li>
                </ul>
              </p>
            </ContentContainer>
          ]}
          rightContent={[
            <SubHeaderContainer>
              <SubHeading>Tools</SubHeading>
            </SubHeaderContainer>,
            <ContentContainer>
              <p>
                <ul>
                  <li>Docker</li>
                  <li>Redux</li>
                  <li>JUnit</li>
                  <li>Express</li>
                  <li>Firebase</li>
                </ul>
              </p>
            </ContentContainer>
          ]} />
      ]} />

    {/* Section 2 */}
    <Section leftContent={[
      <HeaderContainer>
        <IconWrapper>
          <AiFillProject />
        </IconWrapper>
        <Heading>Projects</Heading>
      </HeaderContainer>,
      <HeaderContainer>
        <SubHeadingLink to='https://github.com/L-Michael1/Ukiyo' target='_blank'>
          <SubIconWrapper>
            <AiOutlineLink />
          </SubIconWrapper>
          <SubHeading>Ukiyo - Create and share recipes!</SubHeading>
        </SubHeadingLink>
      </HeaderContainer>,
      <ContentContainer>
        <Date>
          May 2021 - Present
        </Date>
        <p>
          In the works of developing a full-stack web-application in <b>React</b> that allows
          users to share food recipes through a responsive and intricate user interface.
          Ukiyo implements back-end <b>RESTful</b> design principles in <b>Express</b> supporting features such
          as <b>CRUD</b> functions for each user, creating and deleting personal recipes from <b>MongoDB</b>,
          along with a favourite functionality. Utilizing Google’s <b>Firebase</b> for user authentication.
        </p>
      </ContentContainer>,
      <HeaderContainer>
        <SubHeadingLink to='https://github.com/L-Michael1/Dogedex' target='_blank'>
          <SubIconWrapper>
            <AiOutlineLink />
          </SubIconWrapper>
          <SubHeading>Dogedex - Detect dog breeds!</SubHeading>
        </SubHeadingLink>
      </HeaderContainer>,
      <ContentContainer>
        <Date>
          December 2021
        </Date>
        <p>
          During a Tulip <b>hackathon</b> I got the inspiration from a fellow colleague
          to make a quick little application using ml5.js - a machine learning library
          with premade models. Given an image of a dog, Dogedex will detect and spit out
          confidences of different dog breeds!
        </p>
      </ContentContainer>,
      < HeaderContainer >
        <SubHeadingLink to='https://github.com/L-Michael1/mlammy' target='_blank'>
          <SubIconWrapper>
            <AiOutlineLink />
          </SubIconWrapper>
          <SubHeading>mlammy - Personal portfolio website</SubHeading>
        </SubHeadingLink>
      </HeaderContainer>,
      <ContentContainer>
        <Date>
          November 2021 - December 2021
        </Date>
        <p>
          Developed a responsive and robust single page web-based portfolio to showcase personal work and experience.
          Built and deployed using Gatsby – coded with React and GraphQL. Implemented ChakraUI, MaterialUI, and
          Styled-Components to create an intricate and responsive UI.
        </p>
      </ContentContainer>,
      <HeaderContainer>
        <SubHeadingLink to='https://github.com/L-Michael1/m-bot' target='_blank'>
          <SubIconWrapper>
            <AiOutlineLink />
          </SubIconWrapper>
          <SubHeading>mBot - Server moderation Discord bot</SubHeading>
        </SubHeadingLink>
      </HeaderContainer>,
      <ContentContainer>
        <Date>
          May 2020 - July 2020
        </Date>
        <p>
          Developed a Discord Bot using JavaScript, Node.js and Discord.js that contains a variety of server moderating
          commands, fun gambling games, and an economy system.
        </p>
      </ContentContainer>
    ]}
      rightContent={
        [
          <HeaderContainer>
            <IconWrapper>
              <IoMdSchool />
            </IconWrapper>
            <Heading>Education</Heading>
          </HeaderContainer>,
          <SubHeading>
            University of Guelph
          </SubHeading>,
          <ContentContainer>
            <p>
              Guelph, Ontario <br />
              Sep 2019 - Present <br /> <br />
              <ul>
                - Enrolled in the <b>Computer Science (Co-op)</b> program <br />
                - Dean's Honours List (2019-Present) <br />
                - University of Guelph Entrance Scholarship ($3000) <br />
              </ul>
            </p>
          </ContentContainer>,
          <HeaderContainer>
            <IconWrapper>
              <HiOutlineDocumentReport />
            </IconWrapper>
            <Heading>Work Term Reports</Heading>
          </HeaderContainer>,
          <HeaderContainer>
            <SubHeadingLink to='/tulip-report' target='_blank'>
              <SubIconWrapper>
                <AiOutlineLink />
              </SubIconWrapper>
              <h3>Tulip Work Term Report</h3>
            </SubHeadingLink>
          </HeaderContainer>,
        ]} />
  </Layout >
)

export default IndexPage
