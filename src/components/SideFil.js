import React from "react";
import Filter from "./Filter";

const SideFil = ({ data, handle }) => {
  return (
    <div className="side-fil">
      <Filter handle={handle} text={"See as View"} data={data} />
    </div>
  );
};

export default SideFil;
