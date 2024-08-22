import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./about.module.css"
//import edit_kerstin from "../images/editetkerstin.jpg"
import drakeget from "../images/drakeget.png"
import everyone from "../images/ttlemonde2.png"
import everyone2 from "../images/mojanggrup.jpg"
import editobil from "../images/editobil.jpg"

export default ({ data }) => (
  <div>
    <Layout>
      <div>
        <h3 className={styles[`tellus__titel`]}>
          Tellus{" "}
          <div className={styles[`drakeget_picture`]}>
            <img src={drakeget} alt="Drake-geten" />
          </div>{" "}
          Programmeringklubb
        </h3>
        <p>
          Tellus är en programmeringklubb för mammor och dottrar, som startades
          i september 2019. Vi träffas en gång i veckan och gör roliga saker, i
          Python och C just nu. Drakegeten är en donation av Edit, vår yngsta
          medlem. Hon behåller alla rättigheter till den (det?)!
        </p>

        <div className={styles[`participant_picture`]}>
          {/*
          <img src={edit_kerstin} alt="Edit and Kerstin" />
          <img src={editobil} alt="Edit och JompAiroboten" />
          */}

          <img src={everyone} alt="Almost everyone hanging out together" />
        </div>
      </div>
      <div>
        <p>
          För Python har vi följt boker{" "}
          <a href="https://www.bokus.com/bok/9789177797128/programmering-for-nyborjare-med-python/">
            Programmering för Nybörjare med Python
          </a>{" "}
          och{" "}
          <a href="https://nostarch.com/pythoncrashcourse2e">
            Python Crash Course.
          </a>
          {`\n`}
          2020 kör vi Arduino och bygger robotar!
        </p>
        <div className={styles[`participant_picture`]}>
          <img src={everyone2} alt="Nästan alla och lite till." />
        </div>
        <h4>{data.allMarkdownRemark.totalCount} Aktiviteter</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <p>
                {node.frontmatter.title} - {node.frontmatter.date}
              </p>
            </Link>
          </div>
        ))}

        <p>
          {" "}
          <Link to={`/`}>Tillbaka </Link>
        </p>
      </div>
    </Layout>
  </div>
)

export const query = graphql`
  query tellusQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Tellus" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            tags
            description
          }
        }
      }
    }
  }
`
