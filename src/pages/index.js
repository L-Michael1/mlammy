import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import Typewriter from "../components/typewriter/typewriter"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <StaticImage
      src="../images/mlam.png"
      width={275}
      height={"auto"}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Michael Lam"
      style={{ marginTop: `2rem`, marginBottom: `1.5rem`, borderRadius: `25px` }}
    />
    <Typewriter textColor='#FFE8D6' text='Michael Lam' textAlign='inline' />
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </>
)

export default IndexPage
