import React from "react";
import TopMain from "./TopMain";
import { backlogData } from "@/data/data";
import { todos, review } from "@/data/data";
import Work from "./Work";
import Category from "./Category";

const Main = () => {
  console.log(todos);
  return (
    <div className="main-content">
      <TopMain />

      <Work data={backlogData} />
    </div>
  );
};

export default Main;
