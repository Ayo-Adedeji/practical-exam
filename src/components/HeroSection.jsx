import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[55vh] bg-[#099A83] pl-8 px-10 pt-4 pb-32 overflow-visible">
    <div className="max-w-screen-xl">
      <p className="text-[12px] text-white">
        Completed class / DP-100T01: Designing and Implementing a Data Science Solution on Azure
      </p>

      <div className="flex gap-2 mt-2">
        <span className="text-[11px] bg-[#23E6ED] text-[#181A53] px-2 py-0.5 rounded">Microsoft</span>
        <span className="text-[11px] bg-[#FFE7D0] text-[#181A53] px-2 py-0.5 rounded-sm">Public class</span>
      </div>

      <h1 className="text-[24px] text-white mt-4 font-semibold">
        DP-100T01: Designing and Implementing a Data Science Solution on Azure
      </h1>

      <div className="flex items-center gap-3 text-white mt-2">
        <p className="text-[16px]">Completed On: 24 Feb, 2023</p>
        <img className="w-[22px] h-[22px]" src="/images/name.png" alt="name-pic" />
        <span>Richard B</span>
      </div>

      <div className="flex items-center gap-2 text-[#71FF9D] mt-2">
        <img className="w-[24px] h-[24px]" src="/images/check.png" alt="check" />
        <p className="text-[14px]">Your Attendance: 100%</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <a className="bg-[#0876F8] text-white text-[14px] px-3 py-1 rounded-md border">Last Day Evaluation</a>
        <a className="border rounded-md text-white text-[14px] px-3 py-1">Buy Exam</a>
        <a className="border rounded-md text-white text-[14px] px-3 py-1">Access Digital Assets</a>
        <a className="border rounded-md text-white text-[14px] px-3 py-1">Class Recordings</a>
        <a className="border rounded-md text-white text-[14px] px-3 py-1">Additional Resources</a>
      </div>

      
      <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 w-[95%] pr-12 grid grid-cols-1 md:grid-cols-2 gap-6 z-10">

        
        <div className="flex justify-between items-center p-6 bg-white rounded-md shadow-md">
          <div>
            <h1 className="text-[20px] text-[#181A53] font-semibold">Claim your Badge</h1>
            <p className="text-[14px] text-[#181A53] mt-1">Scan QR to download on Mobile Phone</p>
            <button className="mt-2 py-1 px-3 bg-[#0876F8] text-white rounded-md text-[14px]">Download</button>
          </div>
          <img src="/images/qr.png" alt="QR code" className="w-[91px] h-[96px] " />
        </div>

        
        <div className="relative flex justify-between items-center p-6 bg-white rounded-md shadow-md">
          <div>
            <h1 className="text-[20px] text-[#181A53] font-semibold">Download Certificate</h1>
            <p className="text-[14px] text-[#181A53] mt-1">Download your certificate or share it to your social.</p>
            <button className="mt-2 py-1 px-3 bg-[#0876F8] text-white rounded-md text-[14px]">Download</button>
            <img src="/images/share.png" alt="share" className="absolute left-32 bottom-6 w-[30px] h-[30px]" />
          </div>
          <img src="/images/certificate.png" alt="certificate" className="w-[101px] h-[72px]" />
        </div>

      </div>
      </div>
    </div>
  );
};

export default HeroSection;
