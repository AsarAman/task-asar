import React from "react";
import { RxCross1 } from "react-icons/rx";


const Action = ({ handle }) => {
  const action = [
    {
      id: 1,
      value: "Move All Cards in the list",
    },
    {
      id: 2,
      value: "Archieve all cards in the list",
    },
  ];
  return (
    <div className="action">
      <div className="sort-1">
        <p>List Actions</p>
        <RxCross1 onClick={handle}></RxCross1>
      </div>
      <div className="sort-2">
        {action.map((item,index) => {
          return (
            <p onClick={handle} key={index}>
              {item.value}{" "}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Action;
