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
    let collection: any = localStorage.getItem("MissionItem");
    let offlineData = JSON.parse(collection);
    const currentItem: any = offlineData.missions?.find(
      (mission: any) => mission?.mission_id === id
    );
    return <MissionItem data={currentItem} />;
  } else {
    localStorage.setItem("MissionItem", JSON.stringify(data));
    const currentItem: any = data.missions?.find(
      (mission: any) => mission?.mission_id === id
    );

    return <MissionItem data={currentItem} />;
  }
};

export default MissionItemContainer;
