import React from "react";
import { useMissionsInfoQuery } from "../../generated/graphql";
import MissionInfo from "./MissionsInfo";
import styles from "./MissionInfo.module.css";

const MissionInfoContainer = () => {
  const { data, error, loading } = useMissionsInfoQuery();

  if (loading) {
    return (
      <div className={styles.noData}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error || !data) {
    let collection: any = localStorage.getItem("MissionInfo");
    let offlineData = JSON.parse(collection);
    return <MissionInfo data={offlineData} />;
  }

  localStorage.setItem("MissionInfo", JSON.stringify(data));

  return <MissionInfo data={data} />;
};

export default MissionInfoContainer;
