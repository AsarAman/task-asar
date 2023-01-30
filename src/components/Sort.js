import React from "react";
import { BsSortDown } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
const Sort = ({ data, handle }) => {
  console.log(handle);

  return (
    <div className="sort">
      <div className="sort-1">
        <p>
          {" "}
          <BsSortDown /> Sort By{" "}
        </p>
        <RxCross1 onClick={handle} />
      </div>
      <div className="sort-2">
        {data.map((item) => {
          return (
            <p onClick={handle} key={item.id}>
              {item.value}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Sort;
