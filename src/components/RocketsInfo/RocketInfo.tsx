import React from "react";
import { RocketsInfoQuery } from "../../generated/graphql";
import styles from "./RocketInfo.module.css";
import { Grid, Button, Card, CardContent, CardMedia, Typography, CardActions } from "@material-ui/core";
import { Link } from 'react-router-dom';


interface Props {
  data: RocketsInfoQuery;
}

const RocketInfo: React.FC<Props> = ({ data }) => {
  const { rockets } = data;
  return (
    <div className={styles.rocketInfo}>
      {console.log(rockets)}
      <h1 className={styles.pageHeader}>Rockets Launched By SpaceX</h1>
      <Grid container spacing={3}>
        {rockets ? (
          rockets.map((rocket, index) => {
            return (
              <Grid item md={4} xs={12} key={index}>
                <Card>
                  <CardContent className={styles.CardContent}>
                  <CardMedia>
                    <img className={styles.rocketImg} src = {rocket?.flickr_images?.[0] ?rocket.flickr_images[0] :  'null' } alt="Rocket" />
                  </CardMedia>
                  <Typography variant="h3">
                    {rocket?.rocket_name}
                  </Typography>
                  <Typography variant="body1">
                    {rocket?.description}
                  </Typography>
                  <CardActions>
                    <Link to={`/rockets/${rocket?.rocket_id}`} className={styles.btn}>
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
