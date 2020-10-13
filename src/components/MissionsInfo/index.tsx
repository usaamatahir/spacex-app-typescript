import React from 'react'
import { useMissionsInfoQuery } from '../../generated/graphql';
import MissionInfo from './MissionsInfo';
import styles from './MissionInfo.module.css';


const MissionInfoContainer = () => {
  const { data, error, loading } = useMissionsInfoQuery();

  if (loading) {
    return <div className={styles.noData}><h1>Loading...</h1></div>;
  }
  console.log(data)

  if (error || !data) {
    return <div className={styles.noData}><h1>ERROR in fetching data</h1></div>;
  }

  return <MissionInfo data={data} />;
  
}


export default MissionInfoContainer;