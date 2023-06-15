import { gql } from "graphql-request";

export const BLOG_POST_QUERY = gql`
{
    blogPosts (first: 100){
      blogTitle
      content {
        text
      }
      subcategory
      created_in
      id_number
    }
  }
`;