import React from "react";

import Table from "./Table";

const RegionNameDictionary = {
  east_england: "East England",
  london: "London",
  midlands: "Midlands",
  north_east_yorkshire: "North East Yorkshire",
  north_west: "North West",
  south_east: "South East",
  south_west: "South West",
  scotland: "Scotland",
  wales: "Wales",
  north_ireland: "North Ireland",
};

const columns = ["S.No.", "Region", "Count"];

const PeopleHospitalised = ({ data }) => {
  const latestRecord = data[data.length - 1];

  const rows: Array<any> = [];

  for (const [key, value] of Object.entries(latestRecord)) {
    const name = RegionNameDictionary[key];
    if (name) {
      rows.push([name, value]);
    }
  }

  return (
    <Table
      columns={columns}
      title="People in Hospital"
      rows={rows}
      color="olive"
    ></Table>
  );
};

export default PeopleHospitalised;
