import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";

const AddCard = () => {
  const [open, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!open);
  const select = [
    {
      id: 1,
      value: "ContactRM",
      class: "rm",
    },
    {
      id: 2,
      value: "AgentBook",
      class: "book",
    },
    {
      id: 3,
      value: "W4RTeam",
      class: "team",
    },
    {
      id: 4,
      value: "LeadBank",
      class: "bank",
    },
  ];
  return (
    <div className="add-card">
      <div className="add-card-top">
        <h3>Card title</h3>
        <span>
          <RxCross1 />
        </span>
      </div>
      <input type="text" placeholder="Enter Project" />
      {open && (
        <div className="options">
          {select.map((item, index) => {
            return (
              <p key={index} className={item.class}>
                {item.value}
              </p>
            );
          })}
        </div>
      )}
      <div className="button-div">
        <button onClick={handleClick} className="select-project">
          {" "}
          Select Project <RiArrowDropDownLine size={20} />{" "}
        </button>
        <button onClick={handleClick} className="add-button">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddCard;
