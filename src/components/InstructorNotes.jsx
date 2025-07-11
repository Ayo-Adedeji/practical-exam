import React from "react";

const InstructorNotes = () => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10">
      {/* Instructor Notes */}
      <div className="w-full">
        <h1 className="text-[20px] text-[#181A53] md:text-[18px] font-semibold mb-4">
          Instructor Notes
        </h1>
        <div className="bg-[#ffffff]  h-[456px]  mb-12  shadow-md rounded-md border overflow-hidden ">
          <div className="h-10 flex gap-4 border-b px-6 pt-2 ">
            <span className="text-[16px] text-[#888888] ">Day 1</span>
            <span className="text-[16px] text-[#888888] ">Day 2</span>
            <span className="text-[16px] text-[#888888] ">Day 3</span>
          </div>
          <div className="px-6 py-4 ">
            <h2 className="text-[14px] text-[#181A53] md:text-base font-semibold">
              Course Outline
            </h2>
            <ol className="text-[14px] text-[#4d4d4d] md:text-[14px]  sm: mt-2 opacity-75">
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

      {/* Recommended Learning Path */}
      <div className="w-full">
        <h1 className="text-[20px] [#181A53] md:text-[18px] font-semibold mb-4">
          Recommended Learning Path
        </h1>
        <div className="flex flex-col">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="w-full bg-[#ffffff] shadow-md rounded-md p-4 md:p-6 border"
            >
              <div className="flex gap-2 text-sm mb-2">
                <span className="text-[11px] bg-[#23E6ED] text-[#181A53] px-2 py-0.5 rounded">
                  Microsoft
                </span>
                <span className="text-[11px] bg-[#81F8CB] text-[#181A53] px-2 py-0.5 rounded">
                  GTR
                </span>
              </div>

              <h2 className="text-[14px] font-semibold mb-2">
                DP-100T01: Designing and Implementing a Data Science Solution on
                Azure (Data Scientist)
              </h2>

              <div className="flex flex-wrap gap-4 mb-2">
                <small className="flex items-center gap-2 text-[14px] text-[#4d4d4d]">
                  <img
                    src="images/duration.png"
                    alt="duration"
                    className="h-4 w-4"
                  />
                  4.00 days (32 Hrs)
                </small>
                <small className="flex items-center gap-2 text-[14px] text-[#4d4d4d]">
                  <img src="images/vilt.png" alt="vilt" className="h-4 w-4" />
                  Virtual Instructor-Led
                </small>
              </div>

              <div className="flex items-center gap-1 text-xs mb-4">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="images/rating.png"
                    alt={`rating ${i + 1}`}
                    className="h-4 w-4"
                  />
                ))}
                3.5
              </div>

              <div className="flex lg:flex-row lg:gap-7 justify-between  md:items-center md:flex-col">
                <span className="text-[13px] bg-[#F1F1F1] px-3 py-1 rounded-2xl text-[#181A53] w-fit">
                  Starting in 7 days
                </span>
                <button className=" h-[36px] px-12 bg-[0876f8] border-2 border-[#0876F8] text-[#0876F8] rounded-lg text-[14px">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorNotes;
