import React from "react";
import styles from "./ShipItem.module.css";
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
    ship_id: string;
    ship_name: string;
    attempted_landings: number;
    home_port: string;
    ship_type: string;
    roles: string[];
    weight_kg: number;
    year_built: number;
    url: string;
    active: boolean;
    image: string;
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

const ShipItem: React.FC<Props> = ({ data }) => {
  if (!data) {
    return <h1 className={styles.shipItem}>No Launched Ships Available</h1>;
  }

  return (
    <div className={styles.shipItem}>
      <h1>{data.ship_name}</h1>
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
                  <StyledTableCell align="center">
                    Attemted Landings
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {data.attempted_landings ? (
                      data.attempted_landings
                    ) : (
                      <>Null</>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Home Port</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.home_port ? data.home_port : <>Null</>}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Ship Type</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.ship_type ? data.ship_type : <>Null</>}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Roles</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.roles ? data.roles : <>Null</>}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Weight</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.weight_kg ? `${data.weight_kg} kg` : <>Null</>}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Built Year</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.year_built ? data.year_built : <>Null</>}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Active</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.active ? data.active : <>Null</>}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">URL</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.url ? (
                      <a href={data.url} target="_blank">
                        {data.url}
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
        <Grid item md={10} xs={12}>
          <img
            className={styles.gridImage}
            src={data.image ? data.image : "null"}
            alt={data.ship_name}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ShipItem;
