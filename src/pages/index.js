import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// Components
import Seo from "../components/seo/seo"
import Typewriter from "../components/typewriter/typewriter"
import Contact from '../components/contact/contact'
import Section from '../components/section/section'
import Header from '../components/header/header'
import { HeaderContainer, IconWrapper, SubHeading, SubHeadingLink, SubIconWrapper } from './index.styled'

// Icons
import { MdWork } from 'react-icons/md'
import { AiOutlineLink } from 'react-icons/ai'
import { FaLaptopCode } from "react-icons/fa";

const IndexPage = () => (
  <>
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
      <p>
        Backend Software Developer - Checkout <br />
        Guelph, Ontario <br />
        Sep 2021 - Dec 2021 <br /> <br />
        Tulip is a company that provides software as a service that aims at digitizing retail. At Tulip, I was
        part of the Checkout team working as a Backend Software Developer. I worked on a range of tasks such as:
        creating backend endpoints in PHP, SQL query optimizations, reducing time complexity within
        codebase, optimizing a metric dashboard for API requests in Grafana, reducing PHP errors/warnings
        by 80% in GCP logs, bug fixes, and more.
      </p>,
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
            </p>,
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
            <p>
              <ul>
                <li>Docker</li>
                <li>Redux</li>
                <li>JUnit</li>
                <li>Express</li>
                <li>Firebase</li>
              </ul>
            </p>
          ]} />
      ]} />

    {/* Section 2 */}
    <Section leftContent={[
      <HeaderContainer>
        <IconWrapper>
          <MdWork />
        </IconWrapper>
        <h2>Projects</h2>
      </HeaderContainer>,
      <HeaderContainer>
        <SubHeadingLink to='https://tulip.com' target='_blank'>
          <SubIconWrapper>
            <AiOutlineLink />
          </SubIconWrapper>
          <h3>Tulip</h3>
        </SubHeadingLink>
      </HeaderContainer>,
      <p>
        Backend Software Developer - Checkout <br />
        Guelph, Ontario <br />
        Sep 2021 - Dec 2021 <br /> <br />
        Tulip is a company that provides software as a service that aims at digitizing retail. At Tulip, I was
        part of the Checkout team working as a Backend Software Developer. I worked on a range of tasks such as:
        creating backend endpoints in PHP, SQL query optimizations, reducing time complexity within
        codebase, optimizing a metric dashboard for API requests in Grafana, reducing PHP errors/warnings
        by 80% in GCP logs, bug fixes, and more.
      </p>,
    ]}
      rightContent={[
        <HeaderContainer>
          <IconWrapper>
            <FaLaptopCode />
          </IconWrapper>
          <h2>Technical Skills</h2>
        </HeaderContainer>,
      ]} />
    {/* <Section
      leftHeader={
        `Projects`
      }
      leftContent={
        `Lorem ipsum dolor sit amet, consectetur a ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
      }
      rightHeader={
        `Work Term Reports`
      }
      rightContent={
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmm`
      }
    />
    <Section
      leftHeader={
        `Projects`
      }
      leftContent={
        `Lorem ipsum dolor sit amet, consectetur a ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
      }
      rightHeader={
        `Work Term Reports`
      }
      rightContent={
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmm`
      }
    /> */}

    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </>
)

export default IndexPage
