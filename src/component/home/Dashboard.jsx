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
import { MdOutlineFileDownload } from "react-icons/md";
import car from "../../assets/car.jpg";
import family from "../../assets/family.jpg";
const card2="w-40 h-40 mt-7 rounded ml-6 mr-3 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
const card = "bg-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col  h-55 w-55";
const sidebarLinks = " mt-10 flex flex-col gap-y-2";
const navlink2 = "ml-6 mr-6 flex items-center gap-3 px-3 py-3 rounded-lg text-[#959BAA] font-semibold transition-all duration-300 hover:bg-[#2A3448] hover:text-white";
const navLink = "relative text-black font-semibold transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full";
const logocard = "w-12 h-12 rounded-lg bg-gray-300 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300";
const cardtext = "text-black text-lg font-semibold mt-4";
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
        <div className=" bg-white fixed top-0 left-64 right-0 h-18 flex items-center justify-between px-8 z-50 ">
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
      <div className='  flex mt-8 ml-80 justify-between items-center mr-10'>
        <div className='text-[22px] font-semibold text-black '>Active Polices</div>
        <div className='text-black right-0'>View All</div>
      </div>
        {/* card2 */}
        <div className='flex gap-6'>
      <div className="group relative h-58 w-150 bg-gray-200 rounded-2xl ml-70 mt-4 overflow-hidden">


  <div className="absolute top-6 right-6 bg-[#E5F4F0] px-4 py-1 rounded-md">
    <span className="text-green-800 text-sm font-medium">Active</span>
  </div>

  <div className="flex">
    <img
      src={car}
      alt="Car"
      className={card2}  />

    <div className="flex flex-col ml-4 mt-7">

      <div className="text-[22px] font-semibold">
        Premium car protection
      </div>

      <div className="text-[15px] text-gray-600 mt-2">
        Policy ID: IH-AUTO-9920
      </div>

      <div className="flex gap-12 mt-5">
        <div>
          <p className="text-gray-500 text-sm">Coverage Limit</p>
          <p className="font-semibold text-[16px]">$500,000</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Renewal Date</p>
          <p className="font-semibold text-[16px]">Oct 24, 2024</p>
        </div>
      </div>

      <div className="flex gap-3 mt-5">
        <button className="w-75 h-11 bg-white rounded-xl font-medium hover:bg-gray-100 transition">
          Details
        </button>

        <button className="w-12 h-11 flex justify-center items-center bg-blue-950 rounded-xl hover:bg-blue-900 transition">
          <MdOutlineFileDownload className="text-white" size={20} />
        </button>
      </div>

    </div>
  </div>
</div>
      <div className="group relative h-58 w-150 bg-gray-200 rounded-2xl mt-4 overflow-hidden">

  
  <div className="absolute top-6 right-6 bg-[#E5F4F0] px-4 py-1 rounded-md">
    <span className="text-green-800 text-sm font-medium">Active</span>
  </div>

  <div className="flex">
    <img
      src={family}
      alt="Car"
      className={card2}  />

    <div className="flex flex-col ml-4 mt-7">

      <div className="text-[22px] font-semibold">
     Family Wellness Shield
      </div>

      <div className="text-[15px] text-gray-600 mt-2">
  Policy ID: IH-FAM-1024
      </div>

      <div className="flex gap-12 mt-5">
        <div>
          <p className="text-gray-500 text-sm">Included Members</p>
          <p className="font-semibold text-[16px]">4 Persons</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Renewal Date</p>
          <p className="font-semibold text-[16px]">Jan 12, 2025</p>
        </div>
      </div>

      <div className="flex gap-3 mt-5">
        <button className="w-75 h-11 bg-white rounded-xl font-medium hover:bg-gray-100 transition">
          Details
        </button>

        <button className="w-12 h-11 flex justify-center items-center bg-blue-950 rounded-xl hover:bg-blue-900 transition">
          <MdOutlineFileDownload className="text-white" size={20} />
        </button>
      </div>

    </div>
  </div>
</div>
</div>
<div className='text-[22px] font-semibold text-black ml-80 mt-6'>Recent Claims</div>
<div>
  <table className="table-autow-220 h-30 ml-80">
  <thead>
    <tr  className='ml-30'>
      <th  className='ml-30'>CLAIMS</th>
      <th>POLICY TYPE</th>
      <th>DATE FILED</th>
      <th>ESTIMATE</th>
      <th>STATUS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#CLM-88392</td>
      <td>Auto Repair</td>
      <td>858</td>
      <td>	May 12, 2024</td>
      <td>$2,450.00</td>
      <td>Under Review</td>
    </tr>
    <tr class="bg-emerald-200">
      <td>#CLM-88120</td>
      <td>Medical Outpatient</td>
      <td>	Apr 28, 2024</td>
      <td>	$420.00</td>
      <td>	
Approved</td>
    </tr>
    <tr>
      <td>Intro to JavaScript</td>
      <td>Chris</td>
      <td>1,280</td>
    </tr>
  </tbody>
</table>
</div>

      <div className="w-64  h-screen bg-[#0d192f] text-white fixed top-0 left-0">
        <div>
          <h2 className="text-xl font-bold mt-8 ml-16">Insurehub</h2>
        </div>
        <div className={sidebarLinks}>
          <a href="/dashboard" className={`${navlink2} bg-[#8d96ad49]`}><GoHomeFill /> Home</a>
          <a href="/about" className={navlink2}><BiCheckShield /> Policies</a>
          <a href="/contact" className={navlink2}><Fa500Px /> Claims</a>
          <a href="/company" className={navlink2}><MdOutlineSupportAgent /> Support</a>
        </div>
        <div className="  flex flex-row  justify-center  absolute bottom-0 w-46 items-center h-12 rounded-lg  bg-[#8d96ad49] gap-4 ml-8 mb-8">
          <CgProfile size={20} />
          <a href="/login" className="text-sm/6 font-semibold text-white "> Log in </a>

        </div>
      </div>

    </div>
  )
}
export default Dashboard
