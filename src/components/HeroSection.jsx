import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full bg-[#099A83] pt-8 pb-52 md:pb-60 lg:pb-64 relative">
      {/* Content Wrapper */}
      <div className="w-full px-4 md:px-6 lg:px-10 max-w-[1280px] mx-auto">
        <p className="text-[12px] md:text-sm text-[#ffffff] mb-1">
          Completed class / DP-100T01: Designing and Implementing a Data Science Solution on Azure
        </p>

        <div className="flex gap-2 mt-8 flex-wrap">
          <span className="text-[11px] md:text-[12px] bg-[#23E6ED] text-[#181A53] px-2 py-0.5 rounded">
            Microsoft
          </span>
          <span className="text-[11px] md:text-[12px] bg-[#FFE7D0] text-[#181A53] px-2 py-0.5 rounded-sm">
            Public class
          </span>
        </div>

        <h1 className="text-[24px] md:text-2xl lg:text-3xl text-[#ffffff] mt-4 mb-4 font-semibold leading-snug">
         DP-100T01: Designing and Implementing a Data Science Solution<br/> on Azure(Data Scientist)
        </h1>

        <div className="flex items-center text-[16px] gap-2 md:gap-3 text-[#ffffff]  flex-wrap text-sm md:text-base">
          <p>Completed On: 24 Feb, 2023</p>
          <img className="w-[20px] h-[20px]" src="/images/name.png" alt="name-pic" />
          <span>Richard B</span>
        </div>

        <div className="flex items-center gap-2 text-[#71FF9D] mt-8 flex-wrap text-sm md:text-base">
          <img className="w-[20px] h-[20px]" src="/images/check.png" alt="check" />
          <p>Your Attendance: 100%</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8 mb-8">
          {[
            "Last Day Evaluation",
            "Buy Exam",
            "Access Digital Assets",
            "Class Recordings",
            "Additional Resources",
          ].map((text, i) => (
            <a
              key={i}
              className={`${
                i === 0 ? "bg-[#0876F8] text-[#ffffff]" : "border text-[#ffffff]"
              } text-[13px] md:text-[14px] px-3 py-1  rounded-md border`}
            >
              {text}
            </a>
          ))}
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute bottom-[-70px] left-0 w-full px-4 md:px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Badge Card */}
          <div className="flex justify-between items-center p-4 md:p-6 bg-[#ffffff] rounded-md shadow-md">
            <div className="max-w-[70%]">
              <h1 className="text-[16px] md:text-[20px] text-[#181A53] font-semibold">
                Claim your Badge
              </h1>
              <p className="text-[13px] md:text-[14px] text-[#181A53] mt-1">
                Scan QR to download on Mobile Phone
              </p>
              <button className="mt-2 py-1 px-3 bg-[#0876F8] text-[#ffffff] rounded-md text-[13px] md:text-[14px]">
                Download
              </button>
            </div>
            <img src="/images/qr.png" alt="QR code" className="w-[70px] md:w-[91px] h-auto" />
          </div>

          {/* Certificate Card */}
          <div className="relative flex justify-between items-center p-4 md:p-6 bg-[#ffffff] rounded-md shadow-md">
            <div className="max-w-[70%]">
              <h1 className="text-[16px] md:text-[20px] text-[#181A53] font-semibold">
                Download Certificate
              </h1>
              <p className="text-[13px] md:text-[14px] text-[#181A53] mt-1">
                Download your certificate or share it to your social.
              </p>
              <button className="mt-2 py-1 px-3 bg-[#0876F8] text-[#ffffff] rounded-md text-[13px] md:text-[14px]">
                Download
              </button>
              <img
                src="/images/share.png"
                alt="share"
                className="absolute left-28 md:left-32 bottom-6 w-[24px] md:w-[30px] h-auto"
              />
            </div>
            <img
              src="/images/certificate.png"
              alt="certificate"
              className="w-[80px] md:w-[101px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
