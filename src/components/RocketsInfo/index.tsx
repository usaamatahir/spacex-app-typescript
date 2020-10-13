import React from 'react'
import { useRocketsInfoQuery } from '../../generated/graphql';
import RocketInfo from './RocketInfo';
import styles from './RocketInfo.module.css';


const RocketInfoContainer = () => {
  const { data, error, loading } = useRocketsInfoQuery();

  if (loading) {
    return <div className={styles.noData}><h1>Loading...</h1></div>;
  }
  console.log(data)

  if (error || !data) {
    return <div className={styles.noData}><h1>Error in fetching data</h1></div>;
  }

  return <RocketInfo data={data} />;
  
}


export default RocketInfoContainer;