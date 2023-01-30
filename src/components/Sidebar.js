import React, { useState } from "react";

import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { GrDocumentText } from "react-icons/gr";
import { FcWorkflow } from "react-icons/fc";
import { VscDashboard } from "react-icons/vsc";
import { SiBaremetrics, SiGoogleads } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdSegment } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("hello");
  };
  const sidebarItems = [
    { id: 1, text: "dashboard", icon: <VscDashboard /> },
    { id: 2, text: "workflow", icon: <FcWorkflow /> },
    { id: 3, text: "calender", icon: <SlCalender /> },
    { id: 4, text: "socialRm", icon: <AiOutlineUserAdd /> },
    { id: 5, text: "metrics", icon: <SiBaremetrics /> },

    { id: 6, text: "leads", icon: <SiGoogleads /> },
    { id: 7, text: "users", icon: <AiOutlineUserAdd /> },
    { id: 8, text: "notifications", icon: <IoMdNotificationsOutline /> },
    { id: 9, text: "documents", icon: <GrDocumentText /> },
    { id: 10, text: "segments", icon: <MdSegment /> },
    { id: 11, text: "company", icon: <HiOutlineDocumentText /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        <div>
          <div className="highlight"></div>

          <p className="paragraph">
            Zayn
            <span className="dropdown">
              {" "}
              <RiArrowDropDownLine />
            </span>{" "}
          </p>
        </div>

        <span className="back-icons">
          <IoIosArrowBack className="back-icon" size={15} />{" "}
          <IoIosArrowBack size={15} />{" "}
        </span>
      </div>

      <div>
        <ul>
          {sidebarItems.map((item) => {
            const { id, text, icon } = item;
            return (
              <div className="sidebar-item" key={id}>
                <span>{icon}</span>
                <p>{text}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
