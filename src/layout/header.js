import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, github }) => (
  <header>
    <h1>
      {/* <Link to="/">{siteTitle}</Link> */}
      <Link to="/">Coming Soon: RGBA to Hex Converter</Link>
    </h1>
    <span className="description">
      Also as Hex to RGBA converter! Coming soon.
    </span>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
