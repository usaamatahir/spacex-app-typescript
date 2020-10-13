import React from "react";
import { useMissionsInfoQuery } from "../../generated/graphql";
import MissionItem from "./MissionItem";
import { useParams } from "react-router-dom";

const MissionItemContainer = () => {
  const { id } = useParams();

  const { data, error, loading } = useMissionsInfoQuery();

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error || !data) {
    return <h1>Error</h1>;
  } else {
    const currentItem: any = data.missions?.find(
      (mission: any) => mission?.mission_id === id
    );
    console.log(currentItem);
    return <MissionItem data={currentItem} />;
  }
};

export default MissionItemContainer;
