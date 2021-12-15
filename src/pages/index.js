import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
`

const IconWrapper = styled.div`
    color: #DDEECC;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-right: 1rem;
    padding: 0rem;
`

const SubIconWrapper = styled.div`
    color: #FFFFFF;
    font-size: 1.3rem;
    margin-top: 1.3rem;
    margin-right: 0.8rem;
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
        <h2>Work Experience</h2>
      </HeaderContainer>,
      <HeaderContainer>
        <SubHeadingLink to='https://tulip.com' target='_blank'>
          <SubIconWrapper>
            <AiOutlineLink />
          </SubIconWrapper>
          <h3>Tulip</h3>
        </SubHeadingLink>
      </HeaderContainer>,
      <div>
        <p>
          Backend Software Developer - Checkout <br />
          Guelph, Ontario <br />
          Sep 2021 - Dec 2021 <br /> <br />
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
          <h2>Technical Skills</h2>
        </HeaderContainer>,
        <Section
          leftContent={[
            <HeaderContainer>
              <h3>Languages</h3>
            </HeaderContainer>,
            <div>
              <p>
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
              </p>
            </div>,
            <HeaderContainer>
              <h3>Frameworks</h3>
            </HeaderContainer>,
            <p>
              <ul>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </p>
          ]}
          rightContent={[
            <HeaderContainer>
              <h3>Tools</h3>
            </HeaderContainer>,
            <div>
              <p>
                <ul>
                  <li>Docker</li>
                  <li>Redux</li>
                  <li>JUnit</li>
                  <li>Express</li>
                  <li>Firebase</li>
                </ul>
              </p>
            </div>
          ]} />
      ]} />

    {/* Section 2 */}
    <Section leftContent={[
      <HeaderContainer>
        <IconWrapper>
          <AiFillProject />
        </IconWrapper>
        <h2>Projects</h2>
      </HeaderContainer>,
      <HeaderContainer>
        <SubHeadingLink to='https://github.com/L-Michael1/Ukiyo' target='_blank'>
          <SubIconWrapper>
            <AiOutlineLink />
          </SubIconWrapper>
          <h3>Ukiyo - Create and share recipes!</h3>
        </SubHeadingLink>
      </HeaderContainer>,
      <h4>
        May 2021 - Present
      </h4>,
      <p>
        In the works of developing a full-stack web-application in <b>React</b> that allows
        users to share food recipes through a responsive and intricate user interface.
        Ukiyo implements back-end <b>RESTful</b> design principles in <b>Express</b> supporting features such
        as <b>CRUD</b> functions for each user, creating and deleting personal recipes from <b>MongoDB</b>,
        along with a favourite functionality. Utilizing Google’s <b>Firebase</b> for user authentication.
      </p>,
      <HeaderContainer>
        <SubHeadingLink to='https://github.com/L-Michael1/Dogedex' target='_blank'>
          <SubIconWrapper>
            <AiOutlineLink />
          </SubIconWrapper>
          <h3>Dogedex - Detect dog breeds!</h3>
        </SubHeadingLink>
      </HeaderContainer>,
      <h4>
        December 2021
      </h4>,
      <p>
        During a Tulip <b>hackathon</b> I got the inspiration from a fellow colleague
        to make a quick little application using ml5.js - a machine learning library
        with premade models. Given an image of a dog, Dogedex will detect and spit out
        confidences of different dog breeds!
      </p>,
      <HeaderContainer>
        <SubHeadingLink to='https://github.com/L-Michael1/mlammy' target='_blank'>
          <SubIconWrapper>
            <AiOutlineLink />
          </SubIconWrapper>
          <h3>mlammy - Personal portfolio website</h3>
        </SubHeadingLink>
      </HeaderContainer>,
      <h4>
        November 2021 - December 2021
      </h4>,
      <p>
        Developed a responsive and robust single page web-based portfolio to showcase personal work and experience.
        Built and deployed using Gatsby – coded with React and GraphQL. Implemented ChakraUI, MaterialUI, and
        Styled-Components to create an intricate and responsive UI.
      </p>,
      <HeaderContainer>
        <SubHeadingLink to='https://github.com/L-Michael1/m-bot' target='_blank'>
          <SubIconWrapper>
            <AiOutlineLink />
          </SubIconWrapper>
          <h3>mBot - Server moderation Discord bot</h3>
        </SubHeadingLink>
      </HeaderContainer>,
      <h4>
        May 2020 - July 2020
      </h4>,
      <p>
        Developed a Discord Bot using JavaScript, Node.js and Discord.js that contains a variety of server moderating
        commands, fun gambling games, and an economy system.
      </p>,
    ]}
      rightContent={[
        <HeaderContainer>
          <IconWrapper>
            <IoMdSchool />
          </IconWrapper>
          <h2>Education</h2>
        </HeaderContainer>,
        <h3>
          University of Guelph
        </h3>,
        <p>
          Guelph, Ontario <br />
          Sep 2019 - Present <br /> <br />
          - Enrolled in the <b>Computer Science (Co-op)</b> program <br />
          - Dean's Honours List (2019-Present) - Achieved through earning an 80% or above <br />
          - Awarded University of Guelph Entrance Scholarship ($3000) - Achieved through having an acceptance average over 90% <br />
        </p>,
        <HeaderContainer>
          <IconWrapper>
            <HiOutlineDocumentReport />
          </IconWrapper>
          <h2>Work Term Reports</h2>
        </HeaderContainer>,
        <h3>Find my Co-op work term reports below!</h3>,
        <HeaderContainer>
          <SubHeadingLink to='/tulip-report' target='_blank'>
            <SubIconWrapper>
              <AiOutlineLink />
            </SubIconWrapper>
            <h3>Tulip Work Term Report</h3>
          </SubHeadingLink>
        </HeaderContainer>,
      ]} />
  </Layout>
)

export default IndexPage
