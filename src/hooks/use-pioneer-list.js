// @flow
import { useStaticQuery, graphql } from 'gatsby';

const usePioneersList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
query PioneersListQuery {
    allMarkdownRemark(
        limit: 5,
        skip: 0,
        filter: { frontmatter: { category: { eq: "pioneer" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
          html
        }
      }
    }
  }
    `
  );

  return allMarkdownRemark;
};

export default usePioneersList;
