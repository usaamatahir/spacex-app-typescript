import React from "react";
import { RocketsInfoQuery } from "../../generated/graphql";
import styles from "./RocketInfo.module.css";
import {
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@material-ui/core";
import { Link } from "react-router-dom";

interface Props {
  data: RocketsInfoQuery;
}

const RocketInfo: React.FC<Props> = ({ data }) => {
  function truncate(str: any, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const { rockets } = data;

  if (!navigator.onLine) {
    return (
      <div className={styles.rocketInfo}>
        <h1>Go Online To See All the Images</h1>
        <h1 className={styles.pageHeader}>Rockets Launched By SpaceX</h1>
        <Grid container spacing={3} justify="center">
          {rockets ? (
            rockets.map((rocket, index) => {
              return (
                <Grid item md={4} xs={8} key={index}>
                  <Card className={styles.Card}>
                    <CardContent className={styles.CardContent}>
                      <CardMedia>
                        <img
                          className={styles.rocketImg}
                          src={
                            rocket?.flickr_images?.[0]
                              ? rocket.flickr_images[0]
                              : "null"
                          }
                          alt="Rocket"
                        />
                      </CardMedia>
                      <Typography variant="h3">
                        {rocket?.rocket_name}
                      </Typography>
                      <Typography variant="body1">
                        {truncate(rocket?.description, 150)}
                      </Typography>
                      <CardActions>
                        <Link
                          to={`/rockets/${rocket?.rocket_id}`}
                          className={styles.btn}
                        >
                          <Button variant="contained" color="primary">
                            Learn More
                          </Button>
                        </Link>
                      </CardActions>
                    </CardContent>
                  </Card>
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
    <div className={styles.rocketInfo}>
      <h1 className={styles.pageHeader}>Rockets Launched By SpaceX</h1>
      <Grid container spacing={3} justify="center">
        {rockets ? (
          rockets.map((rocket, index) => {
            return (
              <Grid item md={4} xs={8} key={index}>
                <Card className={styles.Card}>
                  <CardContent className={styles.CardContent}>
                    <CardMedia>
                      <img
                        className={styles.rocketImg}
                        src={
                          rocket?.flickr_images?.[0]
                            ? rocket.flickr_images[0]
                            : "null"
                        }
                        alt="Rocket"
                      />
                    </CardMedia>
                    <Typography variant="h3">{rocket?.rocket_name}</Typography>
                    <Typography variant="body1">
                      {truncate(rocket?.description, 150)}
                    </Typography>
                    <CardActions>
                      <Link
                        to={`/rockets/${rocket?.rocket_id}`}
                        className={styles.btn}
                      >
                        <Button variant="contained" color="primary">
                          Learn More
                        </Button>
                      </Link>
                    </CardActions>
                  </CardContent>
                </Card>
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

export default RocketInfo;
