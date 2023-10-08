import React from "react";

const Filter = ({ filterData, category, setCategory }) => {

  function filterHandler(title){
    setCategory(title);
  }

  return (
    <div className="flex flex-wrap w-11/12 max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center items-center">
      {filterData.map((data) => {
        return (
          <button
          onClick={() => filterHandler(data.title)}
            key={data.id}
            // className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-70 border-2 transition-all duration-300"
            className={` text-lg px-2 py-1 rounded-md font-medium ${category === data.title ? "text-white bg-slate-950 border-black border-2 "  : " text-black border-black border-2" } transition-all duration-500`} >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;

