import React from 'react';
import styles from './ShipInfo.module.css';
import { useShipsInfoQuery } from '../../generated/graphql';
import ShipInfo from './ShipInfo';


const ShipInfoContainer = () => {
  const { data, error, loading } = useShipsInfoQuery();

  if (loading) {
    return <div className={styles.noData}>Loading...</div>;
  }
  console.log(data)

  if (error || !data) {
    return <div className={styles.noData}><h1>ERROR in fetching data</h1></div>;
  }

  return <ShipInfo data={data} />;
  
}


export default ShipInfoContainer;