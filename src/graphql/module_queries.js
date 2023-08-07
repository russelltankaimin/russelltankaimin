import { gql } from "graphql-request";

export const BLOG_REVIEW_QUERY = gql`
    {
    courseReviews (first:100){
      moduleName
      contentMain
      description
      slug
      aysem {
        aySem
      }
    }
  }
`;
