import React from "react";

const LabModule = () => (
  <div className="bg-white shadow-md rounded-md px-4 py-4 mt-28 w-full max-w-[1190px] mx-auto">
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
      {/* Title on the left */}
      <h1 className="text-[20px] [#181A53] md:text-lg font-semibold w-full ml-20 md:w-[200px]">
        Access <br/> lab module
      </h1>

      {/* Module Content */}
      <div className="flex-1 w-full bg-[#e2e2e2] rounded-[12px] p-4 flex flex-col md:flex-row items-start md:items-center gap-4">
        {/* Lab Info and Dropdown */}
        <div className="flex-1 w-full">
          <p className="text-[14px] text-[#181A53] font-semibold mb-1">Lab module</p>
          <select className="w-full text-[12px] h-[36px] px-4 rounded-md bg-white text-sm border border-gray-300 mb-2">
            <option>01 Exploring the Lab Environment</option>
          </select>
          <p className="text-[12px] font-semibold text-[#585858]">
            Expires in 180 Days (Valid till: Mon, 20 Sep 2023)
          </p>
        </div>

        {/* Button */}
        <div className="w-full md:w-auto self-stretch md:self-auto">
          <button className="w-full py-2 mr-6 rounded-lg text-[14px] md:w-auto bg-[#0876f8] text-[#ffffff] px-8 text-sm ">
            Access LAB
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default LabModule;
