import React, { useState } from "react";
import Image from "next/image";


import {  filter } from "@/data/data";
import Action from "./Action";
import Filter from "./Filter";

const Asar = ({ data, componentToPass, className }) => {
  const [open, setIsOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const handle = () => setFilterOpen(!filterOpen);
  const handleClick = () => setIsOpen(!open);

  console.log(data);
  return (
    <>
      <div className="test parent-div">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div  className="whole-block">
                <h2>
                  {item.name} <span>{item.itemNo}</span>{" "}
                </h2>
                <div className="left-block">
                  <span onClick={handle}>{item.filterIcon}</span>
                  <span>{item.sortIcon}</span>
                </div>
                <div onClick={handleClick} className="three-dots ">
                  {item.threeDotsIcon}
                </div>
              </div>

              <div className={className}>
                <div className="first-div">
                  <span
                    className={`title ${
                      item.title === "ContactRM" ? "contact" : "agent"
                    }`}
                  >
                    {" "}
                    {item.title}
                  </span>
                  <span>{item.icon}</span>
                </div>
                <h3>{item.todo}</h3>
                <div className="description">
                  <span className="desc-1">{item.description1}</span>
                  <span className="desc-2">{item.description2}</span>
                </div>
                <span className="icon-1">{item.icon1}</span>
                <div className="bottom-div">
                  <span className="date">{item.date}</span>
                  <Image className="image" width={35} height={35} alt="as" src={item.profile}></Image>
                </div>
              </div>
            </div>
          );
        })}
        {componentToPass}
      </div>
      {open && <Action handle={handleClick} />}
      {filterOpen && <Filter data={filter} handle={handle} />}
    </>
  );
};

export default Asar;
