import React from "react";

import Table from "./Table";

const CountryNameDictionary = {
  england: "England",
  scotland: "Scotland",
  wales: "Wales",
  north_ireland: "North Ireland",
};

const columns = ["S.No.", "Country", "Count"];

const VentilatorBeds = ({ data }) => {
  const latestRecord = data[data.length - 1];

  const rows: Array<any> = [];

  for (const [key, value] of Object.entries(latestRecord)) {
    const name = CountryNameDictionary[key];
    if (name) {
      rows.push([name, value]);
    }
  }

  return (
    <Table
      columns={columns}
      title="People on Ventilator Beds"
      rows={rows}
      color="teal"
    ></Table>
  );
};

export default VentilatorBeds;
