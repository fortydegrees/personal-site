// @flow
import { useStaticQuery, graphql } from 'gatsby';

const useWeblogsList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
query WeblogsListQuery {
    allMarkdownRemark(
        limit: 5,
        skip: 0,
        filter: { frontmatter: { template: { eq: "weblog" }, draft: { ne: true } } },
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
        }
      }
    }
  }
    `
  );

  return allMarkdownRemark;
};

export default useWeblogsList;
