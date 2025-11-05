import React from 'react'
import { FaWhatsapp, FaCopyright, FaFacebook, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <footer id="mainfoot" className="flex flex-col gap-6 mt-16 w-full p-10">
        <div className="flex md:flex-row flex-col justify-between w-full">
          <div>
            <h4 className="text-2xl font-bold">JOIN THE COMMINUTY.</h4>
            <p className="text-xl">
              You will Receive All the information regarding the next drops.
            </p>
          </div>
          <div className="form">
            {" "}
            <input type="text" placeholder="Email Address" className=" text-xl font-semibold pl-6 w-[300px] h-[40px] rounded-md border-2 border-black" />
            <button className="bg-black h-[40px] text-white pl-5 pr-5 rounded-md font-bold">
              SUBSCRIBE{" "}
              <i className="" ></i>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-2xl font-bold">FOLLOW US</h4>
          <div className="flex gap-5">
            <i className="text-3xl"><FaWhatsapp/></i>
            <i className="text-3xl"><FaInstagram/></i>
            <i className="text-3xl"><FaTiktok/></i>
            <i className="text-3xl"><FaYoutube/></i>
            <i className="text-3xl"><FaFacebook/></i>
          </div>
        </div>

        <div className="copyright" >
          <p className="flex items-center text-xl">
            <i className=""><FaCopyright/></i>
            2025 RichFit All Rights Reserved
          </p>
        </div>
      </footer>
  )
}

export default Footer