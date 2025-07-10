import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F5F5F5]">
      {/* Desktop Navbar */}
      <div className="hidden md:block fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Mobile Topbar */}
      <div className="md:hidden fixed top-0 left-0 w-full h-[64px] bg-white border-b-2 flex items-center justify-between px-4 z-50">
        <img src="/images/NetCom.png" alt="Logo" className="w-[120px]" />
        <div className="flex items-center gap-4">
          <img src="/images/bell-icon.png" alt="bell" className="w-6 h-6" />
          <button onClick={() => setMobileMenuOpen(true)}>
            <img src="/images/menu.png" alt="menu" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed top-[64px] left-0 w-[244px] h-[calc(100vh-64px)] z-40">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-[244px] h-full bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-4">
              <button onClick={() => setMobileMenuOpen(false)}>
                <img src="/images/close.png" alt="close" className="w-6 h-6" />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-[64px] md:ml-[244px] overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout;
