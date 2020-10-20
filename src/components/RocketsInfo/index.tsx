import React from "react";
import { useRocketsInfoQuery } from "../../generated/graphql";
import RocketInfo from "./RocketInfo";
import styles from "./RocketInfo.module.css";

const RocketInfoContainer = () => {
  const { data, error, loading } = useRocketsInfoQuery();

  if (loading) {
    return (
      <div className={styles.noData}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error || !data) {
    let collection: any = localStorage.getItem("RocketInfo");
    let offlineData = JSON.parse(collection);
    return <RocketInfo data={offlineData} />;
  }

  localStorage.setItem("RocketInfo", JSON.stringify(data));

  return <RocketInfo data={data} />;
};

export default RocketInfoContainer;
