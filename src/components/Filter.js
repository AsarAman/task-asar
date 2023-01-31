import React from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";

const Filter = ({ data, handle, text }) => {
  console.log(handle);
  return (
    <div className="filter-div">
      <div className="sort-1">
        <p>Filter by</p>
        <RxCross1 onClick={handle} />
      </div>
      <div className="sort-2 border">
        {data.map((item, index) => {
          const { id, name, categories } = item;
          console.log(categories);

          return (
            <div className="h3-div" key={index}>
              <h3>{name}</h3>
              {categories.map((item, index) => {
                return (
                  <div key={index} className="p-div">
                    <p className={item.class} key={item.id}>
                      {" "}
                      <input type="checkbox"></input>{" "}
                      {item.src && (
                        <Image className="image-2" width={24} alt=
                        'image2' height={24} src={item.src}></Image>
                      )}{" "}
                      <span className={item.class2}> {item.text}</span>{" "}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="btn-parent">
        <button className="see">{text}</button>
        <div className="bottom-btns">
          <button className="bottom-btn-1">Clear</button>
          <button onClick={handle} className="bottom-btn-2">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
