import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `crimson`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.2rem 1.0rem`,
      }}
    >
    <StaticImage
    src="../images/james-title.png"
    width={400}
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="title"
    style={{ marginBottom: `1.45rem` }}
    />
    <StaticImage
    src="../images/sheesh.png"
    width={200}
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="title"
    style={{ marginBottom: `1.45rem` }}
    />
    <StaticImage
    src="../images/cactus.jpg"
    width={200}
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="title"
    style={{ marginBottom: `1.45rem` }}
    />

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
