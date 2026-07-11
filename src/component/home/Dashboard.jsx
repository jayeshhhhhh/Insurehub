import React from 'react'
import {
  LuSettings,
  LuBell,
} from "react-icons/lu";
import { GoHomeFill } from "react-icons/go";
import { BiCheckShield } from "react-icons/bi";
import { Fa500Px } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { MdAutorenew } from "react-icons/md";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { VscGitCompare } from "react-icons/vsc";
import car from "../../assets/car.jpg";
const card = "bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col  h-55 w-55";
const sidebarLinks = " mt-10 flex flex-col gap-y-2";
const navlink2 = "ml-6 mr-6 flex items-center gap-3 px-3 py-3 rounded-lg text-[#959BAA] font-semibold transition-all duration-300 hover:bg-[#2A3448] hover:text-white";
const navLink = "relative text-black font-semibold transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full";
const logocard = "w-12 h-12 rounded-lg bg-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300";
const cardtext="text-black text-lg font-semibold mt-4";
const Dashboard = () => {
  return (
    <div>
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 h-20">

        {/*for mobile view*/}
        <div className="flex lg:hidden">
          <button type="button" command="show-modal" commandfor="mobile-menu" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200">
            <span className="sr-only">Open main menu</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        {/*for mobile view*/}
        <div className=" bg-white fixed top-0 left-64 right-0 h-20 flex items-center justify-between px-8 ">
          {/* Left Side */}
          <div>
            <h1 className="text-lg font-semibold text-black">
              Welcome Back, Jayesh
            </h1>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <LuBell className="text-black cursor-pointer" size={22} />
            <LuSettings className="text-black cursor-pointer" size={22} />
          </div>
        </div>
      </nav>
      <div className="relative w-275 h-48 rounded-xl bg-[#14213a] ml-80 overflow-hidden ">
        <div
          className="w-0 h-0 border-l-250 border-l-transparent border-t-190 border-t-[#2A3448] absolute top-0 right-0">
        </div>
        <div className="absolute top-4  right-6 gap-0 ">
          <div className=" w-42 h-40 rounded-2xl flex items-center justify-center to-transparent bg-[#bcc4d2]/20 item-end">
            <MdOutlineVerified size={50} className="text-white/80" />
          </div>
        </div>
        <div className="absolute top-6 left-6 text-white">
          <div className="text-[12px] text-green-300 border-green-300 w-38 h-6 bottom-2 bg-green-500/20  rounded-2xl font-semibold mb-2  items-centerjustify-center">
            <BsDot className="inline-block mr-2 " size={30} />
            ACTIVE SYSTEM
          </div>
          <div className="text-[40px] font-bold ">
            your coverage is active and verified
          </div>

          <div className="text-[16px] text-gray-300">
            you are currently protected under 3 comprehensive plans. No urgent actions required at this time.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4  mt-8  ml-80">
        <div className={card}>
          <div className={logocard}>
            <VscGitCompare size={28} />
          </div>

          <h3 className={cardtext}>
            Compare
          </h3>

          <p className="text-gray-600 text-smleading-6">
            Analyze premiums rates and coverage side by side
            
          </p>
        </div>

        <div className={card}>
          <div className={logocard}>
            <CiShoppingCart size={28} />
          </div>

          <h3 className={cardtext}>
            Buy Now
          </h3>

          <p className="text-gray-600 text-smleading-6">
           Explore tailored protection for your assests
          </p>
        </div>

        <div className={card}>
          <div className={logocard}>
            <MdAutorenew size={28} />
          </div>

          <h3 className={cardtext}>
            Renew 
          </h3>

          <p className="text-gray-600 text-sm leading-6">
            Extend existing coverage with one click 
          </p>
        </div>

        <div className={card}>
          <div className={logocard}>
            <IoDocumentAttachOutline size={28} />
          </div>

          <h3 className={cardtext}>
            Claim
          </h3>

          <p className="text-gray-600 text-sm leading-6">
         Submit new claims and track the process
          </p>
        </div>
      </div>
      <div className='flex mt-8 ml-80 justify-between items-center mr-10'>
        <div className='text-[22px] font-semibold text-black '>Active Polices</div>
        <div className='text-black right-0'>View All</div>
      </div>
      <div>
        <div className='h-65 w-135 rounded-2xl ml-80 bg-gray-100'>
          <div>
            <img src={car} alt="" />
          </div>
        </div>
      </div>
      <sidebar className="w-64 h-screen bg-[#0d192f] text-white fixed top-0 left-0">
        <heading>
          <h2 className="text-xl font-bold mt-8 ml-16">Insurehub</h2>
        </heading>
        <div className={sidebarLinks}>
          <a href="/dashboard" className={`${navlink2} bg-[#8d96ad49]`}><GoHomeFill /> Home</a>
          <a href="/about" className={navlink2}><BiCheckShield /> Policies</a>
          <a href="/contact" className={navlink2}><Fa500Px /> Claims</a>
          <a href="/company" className={navlink2}><MdOutlineSupportAgent /> Support</a>
        </div>
        <foooteruser className="  flex flex-row  justify-center  absolute bottom-0 w-46 items-center h-12 rounded-lg  bg-[#8d96ad49] gap-4 ml-8 mb-8">
          <CgProfile size={20} />
          <a href="/login" className="text-sm/6 font-semibold text-white "> Log in </a>

        </foooteruser>
      </sidebar>

    </div>
  )
}

export default Dashboard
