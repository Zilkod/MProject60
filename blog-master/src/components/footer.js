import React from "react"
import { rhythm } from "../utils/typography"
import { GoOctoface } from "react-icons/go"
import { FaTwitter } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaEquals } from "react-icons/fa"
import styles from "./footer.module.css"

class Footer extends React.Component {
  render() {
    return (
      <div
        id="footer"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          marginTop: `auto`,
          padding: rhythm(1),
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          bottom: 0,
        }}
      >
        © {new Date().getFullYear()} &nbsp; &nbsp; Contact me on :{` `}
        <a
          href="https://github.com/Dajamante/"
          className={styles[`footer__icon`]}
        >
          <GoOctoface />
        </a>
        {` `}
        <a
          href="https://twitter.com/ai_maiga"
          className={styles[`footer__icon`]}
        >
          <FaTwitter />
        </a>
        <a href="mailto:aimaiga2@gmail.com" className={styles[`footer__icon`]}>
          {" "}
          <FaEnvelope />
        </a>
      </div>
    )
  }
}

export default Footer
