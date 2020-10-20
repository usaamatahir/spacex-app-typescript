import React from "react";
import styles from "./RocketItem.module.css";
import {
  Grid,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
} from "@material-ui/core";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";

interface Props {
  data: {
    id: number;
    rocket_id: string;
    rocket_name: string;
    description: string;
    company: string;
    cost_per_launch: number;
    first_flight: string;
    payload_weights: {
      kg: number;
    };
    boosters: number;
    success_rate_pct: number;
    active: string;
    wikipedia: string;
    flickr_images: string[];
  };
}

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.grey[500],
      },
      "&:nth-of-type(even)": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  })
)(TableRow);

const RocketItem: React.FC<Props> = ({ data }) => {
  if (!data) {
    return <h1 className={styles.rocketItem}>No Launched Rockets Available</h1>;
  }

  if (!navigator.onLine) {
    return (
      <div className={styles.rocketItem}>
        <h1>Go Online To See All the Images</h1>
        <h1>{data.rocket_name}</h1>
        <div className={styles.description}>
          <label>
            <h1>Description:</h1>
          </label>
          <p>{data.description}</p>
        </div>
        <Grid container spacing={3} justify="center">
          <Grid item md={8} xs={12}>
            <TableContainer component={Paper} className={styles.table}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      Specifications
                    </StyledTableCell>
                    <StyledTableCell align="center">Details</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell align="center">Company</StyledTableCell>
                    <StyledTableCell align="center">
                      {data.company ? data.company : <>Null</>}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="center">
                      Cost Per Launch
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.cost_per_launch ? data.cost_per_launch : <>Null</>}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="center">
                      First Flight
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.first_flight ? data.first_flight : <>Null</>}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="center">
                      Payload Weight
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.payload_weights.kg ? (
                        data.payload_weights.kg
                      ) : (
                        <>Null</>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="center">Boosters</StyledTableCell>
                    <StyledTableCell align="center">
                      {data.boosters ? data.boosters : <>Null</>}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="center">
                      Sucess Rate
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {data.success_rate_pct ? (
                        data.success_rate_pct
                      ) : (
                        <>Null</>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="center">Active</StyledTableCell>
                    <StyledTableCell align="center">
                      {data.active ? data.active : <>Null</>}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="center">Wikipedia</StyledTableCell>
                    <StyledTableCell align="center">
                      {data.wikipedia ? (
                        <a
                          href={data.wikipedia}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.wikipedia}
                        </a>
                      ) : (
                        <>Null</>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="center" alignItems="center">
          {data.flickr_images.map((image, index) => {
            return (
              <Grid item md={10} xs={12} key={index}>
                <img
                  className={styles.gridImage}
                  src={image ? image : "null"}
                  alt={data.rocket_name}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
  return (
    <div className={styles.rocketItem}>
      <h1>{data.rocket_name}</h1>
      <div className={styles.description}>
        <label>
          <h1>Description:</h1>
        </label>
        <p>{data.description}</p>
      </div>
      <Grid container spacing={3} justify="center">
        <Grid item md={8} xs={12}>
          <TableContainer component={Paper} className={styles.table}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">
                    Specifications
                  </StyledTableCell>
                  <StyledTableCell align="center">Details</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell align="center">Company</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.company ? data.company : <>Null</>}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">
                    Cost Per Launch
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {data.cost_per_launch ? data.cost_per_launch : <>Null</>}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">First Flight</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.first_flight ? data.first_flight : <>Null</>}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">
                    Payload Weight
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {data.payload_weights.kg ? (
                      data.payload_weights.kg
                    ) : (
                      <>Null</>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Boosters</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.boosters ? data.boosters : <>Null</>}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Sucess Rate</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.success_rate_pct ? data.success_rate_pct : <>Null</>}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Active</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.active ? data.active : <>Null</>}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Wikipedia</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.wikipedia ? (
                      <a
                        href={data.wikipedia}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.wikipedia}
                      </a>
                    ) : (
                      <>Null</>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center" alignItems="center">
        {data.flickr_images.map((image, index) => {
          return (
            <Grid item md={10} xs={12} key={index}>
              <img
                className={styles.gridImage}
                src={image ? image : "null"}
                alt={data.rocket_name}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default RocketItem;
