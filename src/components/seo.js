import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            viewport
          }
        }
      }
    `
  )


  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={"Hugo Chan"}
      meta={[
        {
          name: `description`,
          content: site.siteMetadata.description,
        },
        {
          name: "title",
          content: site.siteMetadata.title,
        },
        {
          name: "author",
          content: site.siteMetadata.author,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          name: "viewport",
          content: site.siteMetadata.viewport,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO