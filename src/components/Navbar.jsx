import React from 'react';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 flex items-center justify-between h-[64px] bg-white border-b-2'>
      <div className='flex items-center gap-2'>
        <img className='w-[157px] h-[32px] ml-[16px]' src={"images/NetCom.png"} alt='logo' />
      </div>

      <div className='relative'>
        <input className='w-[460px] h-[36px] border-2 px-10 py-2 rounded-lg' type='text' placeholder='Search' />
        <span className='w-[14px] h-[14px] absolute left-3 top-3'>
          <img src={"images/search.png"} alt='search-icon' />
        </span>
      </div>

      <div className='flex items-center gap-7'>
        <button>
          <img className='w-[30px] h-[30px]' src={"images/bell-icon.png"} alt='notify-icon' />
        </button>
        <button>
          <img className='w-[24px] h-[24px]' src={"images/cart.jpg"} alt='cart-icon' />
        </button>
        <div className='flex items-center gap-2'>
          <img className='w-[36px] h-[36px]' src={"images/profilePic.jpg"} alt='profile-pic' />
          <span>R.Spencer</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
