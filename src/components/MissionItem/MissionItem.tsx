import React from "react";
import styles from "./MissionItem.module.css";

interface Props {
  data: {
    description: string;
    manufacturers: string[];
    mission_id: string;
    mission_name: string;
    payload_ids: string[];
    website: string;
    wikipedia: string;
    __typename: string;
  };
}

const MissionItem: React.FC<Props> = ({ data }) => {
  if (!data) {
    return <h1 className={styles.missionItem}>No Mission Available</h1>;
  }

  return (
    <div className={styles.missionItem}>
      <h1>{data.mission_name}</h1>
      <div className={styles.description}>
        <label>
          <h1>Description:</h1>
        </label>
        <p>{data.description}</p>
      </div>
      <div className={styles.table}>
        <div className={styles.tableStyle} id={styles.tableHeader}>
          <h3 className={styles.tableHead}>Specifications</h3>
          <h3 className={styles.tableHead}>Details</h3>
        </div>
        <div className={styles.tableStyle} id={styles.Body1} >
          <h3 className={styles.tableHead}>Manufacturers</h3>
          <ul className={styles.tableHead}>
            {data.manufacturers.map((manufacturer, index) => <li key={index}>{manufacturer}</li>)}
          </ul>
        </div>
        <div className={styles.tableStyle} id={styles.Body2} >
          <h3 className={styles.tableHead}>Payloads</h3>
          <ul className={styles.tableHead}>
            {data.payload_ids.map((payload, index) => <li key={index}>{payload}</li>)}
          </ul>
        </div>
        <div className={styles.tableStyle} id={styles.Body1} >
          <h3 className={styles.tableHead}>Website</h3>
          <a className={styles.tableHead} href={data.website} target='_blank'>{data.website}</a>
        </div>
        <div className={styles.tableStyle} id={styles.Body2} >
          <h3 className={styles.tableHead}>Wekipedia</h3>
          <a className={styles.tableHead} href={data.wikipedia} target='_blank'>{data.wikipedia}</a>
        </div>
      </div>
    </div>
  );
};

export default MissionItem;
