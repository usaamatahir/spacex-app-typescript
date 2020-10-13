import React from "react";
import { useRocketsInfoQuery } from "../../generated/graphql";
import RocketItem from "./RocketItem";
import { useParams } from "react-router-dom";

const RocketItemContainer = () => {
  const { id } = useParams();

  const { data, error, loading } = useRocketsInfoQuery();

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error || !data) {
    return <h1>Error</h1>;
  } else {
    const currentItem: any = data.rockets?.find(
      (rocket: any) => rocket?.rocket_id === id
    );

    return <RocketItem data={currentItem} />;
  }
};

export default RocketItemContainer;
