import React from "react";
import { SketchPicker } from "react-color";
import { RxCross1 } from "react-icons/rx";

const ColorPicker = ({ handle }) => {
  return (
    <div className="color-picker">
      <div className="first">
        <p>Saved as View</p>
        <RxCross1 onClick={handle} />
      </div>
      <div className="second">
        <label>View Name</label>
        <div>
          <input placeholder="Enter Name" type="text"></input>
        </div>
        <SketchPicker width="100" />
        <div className="bottom-btns">
          <button onClick={handle} className="bottom-btn-1">
            Cancel
          </button>
          <button onClick={handle} className="bottom-btn-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
