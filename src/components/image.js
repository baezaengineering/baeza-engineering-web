import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  const data = useStaticQuery(graphql`
    {
      logo: allContentfulAsset {
        edges {
          node {
            fluid(maxWidth: 5000) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  console.log(data)
  // if (!data?.placeholderImage?.childImageSharp?.fluid) {
  //   return <div>Picture not found</div>
  // }

  // return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  return <Img fluid={data.logo.edges[0].node.fluid} />
}

export default Image

// allContentfulAsset {
//   nodes {
//     fluid {
//       ...GatsbyContentfulFluid
//     }
//     title
//     description
//   }
// }
