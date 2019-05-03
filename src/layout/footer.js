import React from "react"

const Footer = ({ github }) => (
  <footer>
    <span id="license">
      MIT {new Date().getFullYear()}, Built with{" "}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </span>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={github}
      className="github-link"
    >
      View on Github
    </a>
    <div id="privacy">
      <span role="img" aria-label="cookie">
        🍪
      </span>{" "}
      This site (will eventually) uses cookies to store user preferences.
      <br />{" "}
      <span role="img" aria-label="cookie">
        🍪
      </span>{" "}
      This site uses cookies from Google to deliver its services and analyze
      traffic. Your IP address and user-agent are shared with Google along with
      performance and security metrics to ensure quality of service, generate
      usage statistics, and to detect and address abuse.
    </div>
  </footer>
)

export default Footer
