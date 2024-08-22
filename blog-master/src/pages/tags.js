import React from "react"
import { Link, graphql } from "gatsby"

import { kebabCase } from "lodash"
import styles from "./tags.module.css"
import Layout from "../components/layout"

const TagsPage = ({ data }) => {
  const allTags = data.allMarkdownRemark.group

  return (
    <Layout>
      <div>
        <h2>Tags</h2>
        <ul className={styles[`spread__out`]}>
          {allTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
