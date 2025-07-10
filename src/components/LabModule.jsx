
import React from "react";

const LabModule = () => (
  <div className="shadow-md rounded-md bg-[#ffffff] p-4 w-[91%] mt-28 ml-8 ">
    <div className="flex items-center gap-6">
      <h1 className="text-[16px] font-semibold ml-28">
        Access lab module
      </h1>
      <div className="flex-1 bg-[#e2e2e2] rounded-[12px] p-4 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-sm mb-2">Lab module</p>
          <select className="w-[730px] h-[36px] px-4 rounded-md bg-white text-sm border border-gray-300 mb-2">
            <option>01 Exploring the Lab Environment</option>
          </select>
          <p className="text-sm">
            Expires in 180 Days (Valid till: Mon, 20 Sep 2023)
          </p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded text-sm">
          Access LAB
        </button>
      </div>
    </div>
  </div>
);

export default LabModule;
