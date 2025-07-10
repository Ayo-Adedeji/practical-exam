import React from "react";

const InstructorNotes = () => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10">
      {/* Instructor Notes */}
      <div className="w-full">
        <h1 className="text-lg md:text-xl font-semibold mb-4">
          Instructor Notes
        </h1>
        <div className="bg-white w-full h-auto shadow-md rounded-md border overflow-hidden">
          <div className="h-10 flex gap-4 border-b px-6 pt-2 text-sm text-gray-700">
            <span>Day 1</span>
            <span>Day 2</span>
            <span>Day 3</span>
          </div>
          <div className="px-6 py-4">
            <h2 className="text-sm md:text-base font-semibold">
              Course Outline
            </h2>
            <ol className="text-sm md:text-[14px] mt-2 pl-4 list-decimal opacity-75">
              <li>Get Started with Cisco Command-Line Interface (CLI)</li>
              <li>Observe How a Switch Operates</li>
              <li>Perform Basic Switch Configuration</li>
              <li>Implement the Initial Switch Configuration</li>
              <li>Inspect TCP/IP Applications</li>
              <li>Configure an Interface on a Cisco Router</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Recommended Learning Path */}
      <div className="w-full">
        <h1 className="text-lg md:text-xl font-semibold mb-4">
          Recommended Learning Path
        </h1>
        <div className="flex flex-col gap-6">
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="w-full bg-white shadow-md rounded-md p-4 md:p-6 border"
            >
              <div className="flex gap-2 text-sm mb-2">
                <span className="text-[11px] bg-[#23E6ED] text-[#181A53] px-2 py-0.5 rounded">
                  Microsoft
                </span>
                <span className="text-[11px] bg-[#81F8CB] text-[#181A53] px-2 py-0.5 rounded">
                  GTR
                </span>
              </div>

              <h2 className="text-sm font-semibold mb-2">
                DP-100T01: Designing and Implementing a Data Science Solution on
                Azure (Data Scientist)
              </h2>

              <div className="flex flex-wrap gap-4 mb-2">
                <small className="flex items-center gap-2 text-xs text-gray-600">
                  <img
                    src="images/duration.png"
                    alt="duration"
                    className="h-4 w-4"
                  />
                  4.00 days (32 Hrs)
                </small>
                <small className="flex items-center gap-2 text-xs text-gray-600">
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

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <span className="text-xs bg-slate-500 px-3 py-1 rounded-2xl text-white w-fit">
                  Starting in 7 days
                </span>
                <button className="w-full md:w-[240px] h-[36px] border-2 border-blue-500 rounded-lg text-sm">
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
