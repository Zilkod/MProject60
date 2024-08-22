import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import styles from "./about.module.css"
import wrongwrongwrong from "../images/wrongwrongwrong.png"

export default ({ data }) => (
  <div>
    <Layout>
      <div>
        <h3>
          About those <div className={styles[`sad__word`]}>(many, MANY)</div>{" "}
          {data.site.siteMetadata.title}
          <div className={styles[`sad__word`]}>(s) </div>...
        </h3>
        <img
          className={styles[`centered_image_with_table`]}
          src={wrongwrongwrong}
          alt="Same problem submitted several times with different mistakes"
        />
      </div>

      <h4> ... and their author.</h4>

      <h3>What is that all about?</h3>
      <p>
        This blog has some solutions to competitive programming problems from
        different judges online, mostly
        <a href="www.kattis.com"> kattis</a>. Many
        <a href="https://github.com/Dajamante"> solutions </a> are on github, so
        don't hesitate to have a look there!
      </p>

      <p>
        I struggled with most of those and they taught me a lot (painfully). My
        solutions are in no way a set of best practices or best solutions (thank
        Goodness!). Competitive programming is just a way to learn programming
        and have fun.
      </p>

      <p>
        There is also activities I do with kids at the Tellus Programming Club,
        and other school projects.
      </p>

      <h3>
        And what is Tellus?
        {` `}{" "}
        <span role="img" aria-label="girl" className={styles[`emo`]}>
          👧
        </span>{" "}
        {` `}
        <span role="img" aria-label="computer" className={styles[`emo`]}>
          💻
        </span>
      </h3>

      <p>
        Tellus is a programming club in Midsommarkransen that I started in
        September 2019. We learn to code in Python.
        <Link to={`/index_tellus`}> Check our activities here!</Link>
      </p>

      <h3>About me</h3>
      <p>
        I live in Stockholm, and some days my programming go as smoothly as
        A&#65284;AP's routine visit to our beautiful city.
      </p>
      <p>
        My French is also very good, so my dream is to make it to the National
        French Team of Sweden (of whatever is available...){" "}
        <span role="img" aria-label="rocket" className={styles[`emo`]}>
          {" "}
          🚀
        </span>
        <span role="img" aria-label="french" className={styles[`emo`]}>
          {" "}
          🇫🇷
        </span>
        <span role="img" aria-label="swedish" className={styles[`emo`]}>
          {" "}
          🇸🇪
        </span>
        .
      </p>

      <p>
        {" "}
        <Link to={`/`}>Back to title </Link>
      </p>

      <br />
      <div className={styles[`bio__frame`]}>
        <Bio />
      </div>
    </Layout>
  </div>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
