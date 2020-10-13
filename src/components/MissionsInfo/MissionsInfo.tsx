import React from "react";
import { MissionsInfoQuery } from "../../generated/graphql";
import styles from "./MissionInfo.module.css";
import { Grid, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';


interface Props {
  data: MissionsInfoQuery;
}

const MissionInfo: React.FC<Props> = ({ data }) => {
  const { missions } = data;
  return (
    <div className={styles.missionInfo}>
      {console.log(missions)}
      <h1 className={styles.pageHeader}>Missions Launched By SpaceX</h1>
      <Grid container spacing={3}>
        {missions ? (
          missions.map((mission: any, index: number) => {
            return (
              <Grid item md={4} xs={12} key={index}>
                <div className={styles.CardContent}>
                  <h1>{mission?.mission_name}</h1>
                  <p>{mission?.description}</p>
                  <Link to={`/missions/${mission?.mission_id}`} className={styles.btn}>
                    <Button variant="contained" color="secondary" className={styles.btn1}>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Grid>
            );
          })
        ) : (
          <h1>Sorry Currently There is No Data Available</h1>
        )}
      </Grid>
    </div>
  );
};

export default MissionInfo;
