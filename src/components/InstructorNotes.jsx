import React from "react";

const InstructorNotes = () => {
  return (
    <div className="mt-10 grid grid-cols-2 pl-3 pr-12  ">
      <div className="w-full p-6">
        <h1 className="text-lg font-semibold mb-4">Instructor Notes</h1>
        <div className=" bg-[#ffffff] w-full h-[468px] shadow-md rounded-md flex flex-col border">
          <div className="h-8 flex gap-5 border pl-8 pt-2 text-sm">
            <span>Day 1</span>
            <span>Day 2</span>
            <span>Day 3</span>
          </div>
          <div>
            <h2 className="text-[14px] mt-6 pl-8">Course Outline</h2>
            <ol className="text-[14px] mt-4 pl-16 opacity-75">
              <li>a. Get Started with Cisco Command-Line Interface (CLI)</li>
              <li>b. Observe How a Switch Operates</li>
              <li>c. Perform Basic Switch Configuration</li>
              <li>d. Implement the Initial Switch Configuration</li>
              <li>e. Inspect TCP/IP Applications</li>
              <li>f. Configure an Interface on a Cisco Router</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="w-full p-6">
        <h1 className="text-lg font-semibold mb-4">Recommended Learning Path</h1>
        <div className="flex flex-col gap-6 bg-[#ffffff] ">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="w-full shadow-md rounded-md p-6 flex flex-col justify-start border border-gray-200"
            >
              <div>
                <div className="flex gap-2 text-sm mb-2">
                  <span className="text-[11px] bg-[#23E6ED] text-[#181A53] px-2 py-0.5 rounded">Microsoft</span>
                  <span className="text-[11px] bg-[#81F8CB] text-[#181A53] px-2 py-0.5 rounded" >GTR</span>
                </div>
                <h2 className="text-sm font-semibold mb-2">
                  DP-100T01: Designing and Implementing a Data Science Solution on Azure (Data Scientist)
                </h2>
                <div className="flex gap-4 mb-2">
                  <small className="flex items-center gap-2 opacity-75 text-xs">
                    <img src={"images/duration.png"} alt="duration" className="h-4 w-4" /> 4.00 days (32 Hrs)
                  </small>
                  <small className="flex items-center gap-2 opacity-75 text-xs">
                    <img src={"images/vilt.png"} alt="vilt" className="h-4 w-4" /> Virtual Instructor-Led
                  </small>
                </div>
                <small className="flex items-center gap-1 text-xs mb-4">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={"images/rating.png"} alt={`rating ${i + 1}`} className="h-4 w-4" />
                  ))}
                  3.5
                </small>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-slate-400 px-3 py-1 rounded-2xl text-white">
                    Starting in 7 days
                  </span>
                  <button className="w-[310px] h-[36px] border-2 border-blue-500 rounded-lg text-sm">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorNotes;
