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

export const getQueryFromSlug = gql`
    query CourseReviews($slug: String!) {
        courseReview(where: {slug: $slug}) {
          contentMain
          aysem {
            aySem
          }
          moduleName
          description
        }
      }
    `