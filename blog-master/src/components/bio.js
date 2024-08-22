/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import styles from "./bio.module.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            firstname
            lastname
            nickname
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        alignItems: "center",
        justifyContent: "center",
        marginTop: rhythm(1 / 2),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p
        style={{
          marginTop: rhythm(1 / 2),
        }}
      >
        <strong>
          {author.firstname} {` `} &#8216;
        </strong>
        <span className={styles[`nickname`]}> {author.nickname}</span>
        <strong>
          &#8217; {` `}
          {author.lastname}
        </strong>
        {` `}
        lives in Sweden with her family and studies Computer Science.
      </p>
    </div>
  )
}
//https://stackoverflow.com/questions/46835145/how-to-use-icons-like-font-awesome-in-gatsby

export default Bio
