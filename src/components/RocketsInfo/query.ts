import gql from "graphql-tag";

export const QUERY_MISSION_LIST = gql`
  query RocketsInfo {
    rockets {
      id
      rocket_id
      rocket_name
      description
      company
      cost_per_launch
      first_flight
      payload_weights {
        kg
      }
      boosters
      success_rate_pct
      active
      wikipedia
      flickr_images
    }
  }
`;
