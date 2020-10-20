import React from "react";
import { MissionsInfoQuery } from "../../generated/graphql";
import styles from "./MissionInfo.module.css";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

interface Props {
  data: MissionsInfoQuery;
}

const MissionInfo: React.FC<Props> = ({ data }) => {
  function truncate(str: any, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const { missions } = data;

  if (!navigator.onLine) {
    return (
      <div className={styles.missionInfo}>
        <h1>Go Online To See All the Images</h1>
        <h1 className={styles.pageHeader}>Missions Launched By SpaceX</h1>
        <Grid container spacing={3} justify="center">
          {missions ? (
            missions.map((mission: any, index: number) => {
              return (
                <Grid item md={4} xs={8} key={index}>
                  <div className={styles.CardContent}>
                    <h1>{mission?.mission_name}</h1>
                    <p>{truncate(mission?.description, 250)}</p>
                    <Link
                      to={`/missions/${mission?.mission_id}`}
                      className={styles.btn}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        className={styles.btn1}
                      >
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
  }
  return (
    <div className={styles.missionInfo}>
      <h1 className={styles.pageHeader}>Missions Launched By SpaceX</h1>
      <Grid container spacing={3} justify="center">
        {missions ? (
          missions.map((mission: any, index: number) => {
            return (
              <Grid item md={4} xs={8} key={index}>
                <div className={styles.CardContent}>
                  <h1>{mission?.mission_name}</h1>
                  <p>{truncate(mission?.description, 250)}</p>
                  <Link
                    to={`/missions/${mission?.mission_id}`}
                    className={styles.btn}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      className={styles.btn1}
                    >
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
