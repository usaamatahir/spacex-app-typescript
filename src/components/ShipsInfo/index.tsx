import React from "react";
import styles from "./ShipInfo.module.css";
import { useShipsInfoQuery } from "../../generated/graphql";
import ShipInfo from "./ShipInfo";

const ShipInfoContainer = () => {
  const { data, error, loading } = useShipsInfoQuery();

  if (loading) {
    return <div className={styles.noData}>Loading...</div>;
  }

  if (error || !data) {
    let collection: any = localStorage.getItem("ShipInfo");
    let offlineData = JSON.parse(collection);
    return <ShipInfo data={offlineData} />;
  }

  localStorage.setItem("ShipInfo", JSON.stringify(data));

  return <ShipInfo data={data} />;
};

export default ShipInfoContainer;
