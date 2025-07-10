import React from "react";

const LabModule = () => (
  <div className="bg-white shadow-md rounded-md px-4 py-6 mt-28 w-full max-w-[1280px] mx-auto">
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
      {/* Title on the left */}
      <h1 className="text-base md:text-lg font-semibold w-full md:w-[200px]">
        Access lab module
      </h1>

      {/* Module Content */}
      <div className="flex-1 w-full bg-[#e2e2e2] rounded-[12px] p-4 flex flex-col md:flex-row items-start md:items-center gap-4">
        {/* Lab Info and Dropdown */}
        <div className="flex-1 w-full">
          <p className="text-sm mb-1">Lab module</p>
          <select className="w-full h-[36px] px-4 rounded-md bg-white text-sm border border-gray-300 mb-2">
            <option>01 Exploring the Lab Environment</option>
          </select>
          <p className="text-sm text-gray-700">
            Expires in 180 Days (Valid till: Mon, 20 Sep 2023)
          </p>
        </div>

        {/* Button */}
        <div className="w-full md:w-auto self-stretch md:self-auto">
          <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded text-sm h-full md:h-[40px]">
            Access LAB
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default LabModule;
