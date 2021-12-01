import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo/seo"
import Typewriter from "../components/typewriter/typewriter"
import Contact from '../components/contact/contact'
import Section from '../components/section/section'
import Header from '../components/header/header'

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
    <Section
      leftHeader={
        `Header 1`
      }
      leftContent={
        `Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametLoremLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametconsectetur Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametconsecteturLorem ipsum dolor sit amet, Lorem ipsum dolor sit ametconsecteturLorem ipsum dolor sit amet, Lorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
      }
      rightHeader={
        `Header 2`
      }
      rightContent={
        `Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
      }
    />
    <Section
      leftHeader={
        `Header 1`
      }
      leftContent={
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
      }
      rightHeader={
        `Header 2`
      }
      rightContent={
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
      }
    />

    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </>
)

export default IndexPage
