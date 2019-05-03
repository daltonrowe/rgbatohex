import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, github }) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <span>
      Also as Hex to RGBA converter.
      <a target="_blank" rel="noopenner noreferrer">
        View and contribute on Github!
      </a>
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
