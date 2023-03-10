import React, { useState } from "react";
import Image from "next/image";

import AddButton from "./AddButton";
import Action from "./Action";
import Filter from "./Filter";
import { filter } from "@/data/data";

const Category = ({ data }) => {
  const [open, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const showfil = () => setShow(!show);
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
                  <span>{item.filterIcon}</span>
                  <span>{item.sortIcon}</span>
                </div>
                <div onClick={handleClick} className="three-dots ">
                  {item.threeDotsIcon}
                </div>
              </div>
              <div className="card">
                <div className="first-div">
                  <span
                    className={`title ${
                      item.title === "DW4RTeam" ? "d4" : ""
                    } ${item.title === "ContactRM" ? "contact" : "agent"}`}
                  >
                    {item.title}
                  </span>
                  <span>{item.icon}</span>
                </div>
                <h3>{item.todo}</h3>
                <div className="lines">
                  <span className={item.class1}></span>
                  <span className={item.class2}></span>
                </div>
                <div className="card-icons">
                  <span>{item.icon1}</span>
                  <span>{item.commentIcon}</span>
                  <span>{item.no}</span>
                  <span>{item.icon2}</span>
                  <span>{item.rating}</span>
                  <span>{item.link}</span>
                  <span>{item.count}</span>
                </div>
                <div className="bottom-div">
                  <span className="date">{item.date}</span>
                  <Image className="image" width={35} height={35} alt="syed" src={item.profile}></Image>
                </div>
              </div>
            </div>
          );
        })}
        <AddButton />
      </div>
      {open && <Action handle={handleClick} />}
      {show && <Filter data={filter} handle={showfil} />}
    </>
  );
};

export default Category;
