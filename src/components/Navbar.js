import React from "react";
import { TbMessageCircle } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { BsLightbulb } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbBulb } from "react-icons/tb";
import { BsPlusLg } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="avatar-div">
          <Image width={35} height={35} className="image" alt="aman" src="/pic.jpg"></Image>
          <span className="avatar-text">15</span>
        </div>
        <div className="avatar-div">
          <Image className="image" width={35} height={35} alt="aman" src="/pic.jpg"></Image>
          <span className="avatar-text">16</span>
        </div>
        <div className="dropdown-div">
          <RiArrowDropDownLine size={20} />
        </div>
      </div>
      <div className="icon ">
        <TbBulb size={20}></TbBulb>
      </div>
      <div className="navbar-middle">
        <span className="icon large">
          {" "}
          <BsPlusLg fill="white" size={20} />
        </span>

        <span className="search">
          {" "}
          <CiSearch size={20} className="search-icon" />{" "}
          <input type="search" placeholder="Search" />{" "}
        </span>
      </div>
      <div className="navbar-right">
        <span className="icon">
          <BsLightbulb size={20}></BsLightbulb>
        </span>
        <span className="icon">
          <SlCalender size={20} />
        </span>
        <span className="icon">
          <TbMessageCircle size={20} />
        </span>
        <Image height={35} width={35} className="image" alt="aman" src="/pic.jpg"></Image>
      </div>
    </nav>
  );
};

export default Navbar;
