import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-[64px] left-0 w-[244px] h-[calc(100vh-64px)] bg-[#ffffff] overflow-y-auto z-40 ">
      <div className="flex flex-col gap-10 p-4">
        <div>
          <ul className="flex flex-col gap-3 text-sm">
            {[
              "Dashboard",
              "Training classes",
              "e-Learning",
              "Course Catalog",
              "Resources",
            ].map((text, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 group hover:bg-[#0876f8] p-2 rounded cursor-pointer transition"
              >
                <img
                  src="/images/dashboard.png"
                  alt={`${text} Icon`}
                  className="w-6 h-6 transition duration-200 group-hover:brightness-0 group-hover:invert"
                />
                <span className="transition-colors duration-200 group-hover:text-white">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-300" />

        <div>
          <ul className="flex flex-col gap-3 text-sm">
            {["Help center", "Settings", "Training classes"].map(
              (text, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 group hover:bg-[#0876f8] p-2 rounded cursor-pointer transition"
                >
                  <img
                    src="/images/dashboard.png"
                    alt={`${text} Icon`}
                    className="w-6 h-6 transition duration-200 group-hover:brightness-0 group-hover:invert"
                  />
                  <span className="transition-colors duration-200 group-hover:text-white">
                    {text}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
