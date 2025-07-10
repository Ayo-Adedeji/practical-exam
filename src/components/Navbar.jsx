import React from 'react';

const Navbar = () => {
  return (
    <nav className="h-[64px] bg-white border-b-2 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <img className="w-[157px] h-[32px]" src="/images/NetCom.png" alt="logo" />
      </div>

      <div className="relative">
        <input className="w-[460px] h-[36px] border px-10 py-2 rounded-lg" type="text" placeholder="Search" />
        <span className="absolute left-3 top-3 w-[14px] h-[14px]">
          <img src="/images/search.png" alt="search-icon" />
        </span>
      </div>

      <div className="flex items-center gap-6">
        <img className="w-[30px] h-[30px]" src="/images/bell-icon.png" alt="notifications" />
        <img className="w-[24px] h-[24px]" src="/images/cart.jpg" alt="cart" />
        <div className="flex items-center gap-2">
          <img className="w-[36px] h-[36px]" src="/images/profilePic.jpg" alt="profile" />
          <span>R.Spencer</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
