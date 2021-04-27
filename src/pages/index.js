import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <StaticImage
      src="../images/art-heading.png"
      width={500}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="title"
      style={{ marginBottom: `1.45rem` }}
    />
    <StaticImage
    src="../images/coffeee.png"
    width={100}
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="title"
    style={{ marginBottom: `1.45rem` }}
    />
  
  </Layout>
)

export default IndexPage
