import React from "react";
import { useShipsInfoQuery } from "../../generated/graphql";
import ShipItem from "./ShipItem";
import { useParams } from "react-router-dom";

const ShipItemContainer = () => {
  const { id } = useParams();

  const { data, error, loading } = useShipsInfoQuery();

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error || !data) {
    return <h1>Error</h1>;
  } else {
    const currentItem: any = data.ships?.find(
      (ship: any) => ship?.ship_id === id
    );

    return <ShipItem data={currentItem} />;
  }
};

export default ShipItemContainer;
