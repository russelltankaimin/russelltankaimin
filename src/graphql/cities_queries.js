import { gql } from "graphql-request";

export const CITY_QUERY = gql`
  {
    citiesVisiteds(first: 100) {
        country
        continent
        description
        slug
        cityName
      }
  }
`;