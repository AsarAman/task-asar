import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AddButton = () => {
  return (
    <div className="add-btn-div">
      <button className="add-btn">
        {" "}
        <AiOutlinePlus /> Add Card{" "}
      </button>
    </div>
  );
};

export default AddButton;
