import React from "react";
import { ShipsInfoQuery } from "../../generated/graphql";
import styles from "./ShipInfo.module.css";
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
  data: ShipsInfoQuery;
}

const ShipInfo: React.FC<Props> = ({ data }) => {
  const { ships } = data;

  if (!navigator.onLine) {
    return (
      <div className={styles.shipInfo}>
        <h1>Go Online To See All the Images</h1>
        <h1 className={styles.pageHeader}>Ships Launched By SpaceX</h1>
        <Grid container spacing={3} justify="center">
          {ships ? (
            ships.map((ship, index) => {
              return (
                <Grid item md={4} xs={8} key={index}>
                  <Card className={styles.Card}>
                    <CardContent className={styles.CardContent}>
                      <CardMedia>
                        <img
                          className={styles.shipImg}
                          src={ship?.image ? ship.image : "null"}
                          alt="ship "
                        />
                      </CardMedia>
                      <Typography variant="h4">{ship?.ship_name}</Typography>
                      <Typography variant="body1">{ship?.home_port}</Typography>
                      <CardActions>
                        <Link
                          to={`/ships/${ship?.ship_id}`}
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
            <h1 className={styles.offline}>
              Sorry Currently There is No Data Available
            </h1>
          )}
        </Grid>
      </div>
    );
  }

  return (
    <div className={styles.shipInfo}>
      <h1 className={styles.pageHeader}>Ships Launched By SpaceX</h1>
      <Grid container spacing={3} justify="center">
        {ships ? (
          ships.map((ship, index) => {
            return (
              <Grid item md={4} xs={8} key={index}>
                <Card className={styles.Card}>
                  <CardContent className={styles.CardContent}>
                    <CardMedia>
                      <img
                        className={styles.shipImg}
                        src={ship?.image ? ship.image : "null"}
                        alt="ship "
                      />
                    </CardMedia>
                    <Typography variant="h4">{ship?.ship_name}</Typography>
                    <Typography variant="body1">{ship?.home_port}</Typography>
                    <CardActions>
                      <Link
                        to={`/ships/${ship?.ship_id}`}
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
          <h1 className={styles.offline}>
            Sorry Currently There is No Data Available
          </h1>
        )}
      </Grid>
    </div>
  );
};

export default ShipInfo;
