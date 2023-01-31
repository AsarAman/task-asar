import React, { useState } from "react";
import Aman from "./Tab";
import {
  BsLightbulb,
  BsPinAngle,
  BsSortDown,
  BsFilter,
  BsFolder,
} from "react-icons/bs";
import { ImEmbed2 } from "react-icons/im";
import { GiFireworkRocket } from "react-icons/gi";
import Image from "next/image";

import { CiViewBoard } from "react-icons/ci";
import { SiPolywork } from "react-icons/si";
import Sort from "./Sort";
import { sortby, sideFil} from "@/data/data";
import SideFil from "./SideFil";
import ColorPicker from "./ColorPicker";


const TopMain = () => {
  const [open, setIsOpen] = useState(false);
  const [filOpen, setFilOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [pin, setPin] = useState(true);
  const [arcOpen, setArcOpen] = useState(false);
  const showColor = () => setColor(!color);
  const handle = () => setFilOpen(!filOpen);
  const handleClick = () => setIsOpen(!open);
  const showPin = () => setPin(!pin);
  const showarc = () => setArcOpen(!arcOpen);
  return (
    <>
      <div className="top-content">
        <div className="left-content">
          <h1>workflow</h1>
          <div className=" top">
            <span className="icon main-icon workflow">
              <SiPolywork size={20}></SiPolywork>
            </span>
            <span className="icon main-icon ">
              <GiFireworkRocket size={20} />
            </span>
            <span className="icon main-icon">
              <ImEmbed2 size={20} />
            </span>
            <span className="icon main-icon">
              <BsLightbulb size={20} />
            </span>
          </div>
          <div className="images-div">
            <div className="img">
              <Image width={35} height={35} className="image" alt="img" src="/pic.jpg" />
              <span className="image-text">12</span>
            </div>
            <div className="img">
              <Image width={35} height={35} className="image" alt="img" src="/pic.jpg" />
              <span className="image-text">13</span>
            </div>
            <div className="img">
              <Image width={35} height={35} className="image" alt="img" src="/pic.jpg" />
              <span className="image-text">11</span>
            </div>
            <div className="img">
              <Image width={35} height={35} className="image" alt="img" src="/pic.jpg" />
              <span className="image-text">14</span>
            </div>
          </div>
        </div>
        <div className="icons-div">
          <span className="icon-text">
            <BsPinAngle onClick={showPin} size={20}></BsPinAngle>
          </span>
          <span className="icon-text">
            <BsFolder onClick={showarc} size={20} />
          </span>
          <span className="icon-text">
            <CiViewBoard onClick={showColor} /> views
          </span>
          <span className="icon-text">
            <BsFilter onClick={handle} size={20} /> Filter
          </span>
          <span onClick={handleClick} className="icon-text">
            <BsSortDown size={20} /> Sort By
          </span>
        </div>
      </div>
      
      {open && <Sort data={sortby} handle={handleClick} />}
      {filOpen && (
        <SideFil data={sideFil} text={"See as view"} handle={handle} />
      )}
      {color && <ColorPicker handle={showColor} />}
      {arcOpen && <Aman handle={showarc} />}
      
    </>
  );
};

export default TopMain;
