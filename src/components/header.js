import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Header1 = styled.h1`
    margin: 0
`

const TitleWrapper = styled.div`
    margin: 0 auto
    max-width: 960
    padding: 1.45rem 1.0875rem
    
    .link-style {
        color: white
        text-decoration: none
    }
`


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333`,
      marginBottom: `1.45rem`,
    }}
  >
    <TitleWrapper>
      <Header1>
        <Link
          to="/"
          className="link-style"
        >
          {siteTitle}
        </Link>
      </Header1>
    </TitleWrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
