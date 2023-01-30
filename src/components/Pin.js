import React from "react";
import { RxCross1 } from "react-icons/rx";


const Pin = ({ data }) => {
  console.log(data);
  return (
    <div className="pin-div">
      <div className="pin-top">
        <h3>Pinned Card</h3>
        <RxCross1 />
      </div>
      <div className="pin-input">
        <p>
          {" "}
          <input placeholder="search" type="search"></input>{" "}
        </p>
      </div>
      {data &&
        data.map((item, index) => {
          return (
            <div key={index} className="card pin-card">
              <div className="first-div">
                <span
                  className={`title ${item.title === "DW4RTeam" ? "d4" : ""} ${
                    item.title === "ContactRM" ? "contact" : "agent"
                  }`}
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
              <div className="icons-div">
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
                <img className="image" src={item.profile}></img>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Pin;
