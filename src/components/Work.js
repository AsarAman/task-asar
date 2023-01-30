import React from "react";
import AddCard from "./AddCard";
import Category from "./Category";
import { todos, progress, review, completed, backlogData } from "@/data/data";
import Asar from "./Asar";
import AddButton from "./AddButton";

const Work = ({ data }) => {
  return (
    <>
      <div className="test">
        <Asar componentToPass={<AddCard />} data={backlogData} />
        <Category data={todos} />
        <Category data={progress} />
        <Asar
          data={review}
          className={"card"}
          componentToPass={<AddButton />}
        ></Asar>

        <Asar
          data={completed}
          className={"card"}
          componentToPass={<AddButton />}
        />
      </div>
    </>
  );
};

export default Work;
