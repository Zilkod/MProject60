import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GiHealthNormal } from "react-icons/gi"
import { FaQuestion } from "react-icons/fa"
import { FaTags } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { rhythm } from "../utils/typography"
import styles from "./header.module.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <div
        className={styles[`header__wrap`]}
        style={{ padding: `${rhythm(0.5)} ${rhythm(1.5 / 4)}` }}
      >
        <Link to={`/`} className={styles[`header__wrap__link`]}>
          <GiHealthNormal className={styles[`main_icon`]} />
          <div className={styles[`header__title`]}>
            {` `}
            {data.site.siteMetadata.title}
          </div>
        </Link>
        <nav role="main" className={styles[`header__nav`]}>
          <Link to={`/about`} className={styles[`header__link`]}>
            <div className={styles[`hidden_text`]} id={`orange__text`}>
              <span className={styles[`orange__span`]}>About</span>
            </div>
            <div className={styles[`hidden_question`]}>
              <FaQuestion />
            </div>
          </Link>
          <Link to={`/tags`} className={styles[`header__link`]}>
            <div className={styles[`hidden_text`]}> Tags </div>
            <div className={styles[`hidden_tags`]}>
              <FaTags />
            </div>
          </Link>
          <Link to={`/index_tellus`} className={styles[`header__link`]}>
            <div className={`${styles.hidden_text} `}> Tellus </div>
            <div
              className={`${styles.hidden_python} ${styles.sparkling_tellus}`}
            >
              <FaPython />
            </div>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
