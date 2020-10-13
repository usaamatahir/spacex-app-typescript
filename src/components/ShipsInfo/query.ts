import gql from "graphql-tag";

export const QUERY_ROCKETS_LIST = gql`
  query ShipsInfo {
    ships {
      ship_id
      ship_name
      attempted_landings
      home_port
      ship_type
      roles
      weight_kg
      year_built
      url
      active
      image
    }
  }
`;
