import React from "react";

const Projects = () => {
  return (
    <div className="w-full max-w-grid  px-4 sm:px-8 lg:px-[80px] h-full gap-[35px] flex flex-col">
      <div className="gap-[20px] w-full h-[250px] grid grid-cols-3">
        <div className="col-span-1 rounded-t-full bg-black h-full  flex"></div>
        <div className="col-span-2 rounded-r-full h-full bg-black flex"></div>
      </div>      <div className="gap-[20px] w-full h-[250px] grid grid-cols-3">
        <div className="col-span-1  bg-black h-full  flex"></div>
        <div className="col-span-1  h-full bg-black flex"></div>
        <div className="col-span-1  h-full bg-black flex"></div>
      </div>
    </div>
  );
};

export default Projects;
