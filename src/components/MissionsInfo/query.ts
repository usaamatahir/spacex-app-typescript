import gql from "graphql-tag";

export const QUERY_MISSION_LIST = gql`
  query MissionsInfo {
    missions {
      mission_id
      mission_name
      description
      manufacturers
      wikipedia
      website
      payload_ids
    }
  }
`;
