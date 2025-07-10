import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import LabModule from '../components/LabModule'
import InstructorNotes from '../components/InstructorNotes'


const Home = () => {
  return (
    <div className='bg-[#F5F5F5]'>
        <Navbar/>
        <div className='flex w-full'>
        <Sidebar/>
        <div className='flex-1 mt-[20px] ml-[254px] p-10'>
        <HeroSection/>
        <LabModule/>
        <InstructorNotes/>
        </div>
        </div>
    </div>
  )
}

export default Home