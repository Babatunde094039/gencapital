import { maxWidth } from '@/helpers'
import { images } from '@/theme'
import Image from 'next/image'
import React from 'react'

const Navar = () => {
  return (
    <div>
       <div className="bg-[#061A01] w-full md:h-[80px] h-[72px] flex items-center fixed top-0 z-[100]">
        <div
          className={`flex justify-between items-center bg-[#061A01] xl:w-[1280px] w-full h-[56px] xl:px-[32px] px-[8%] py-5 max-w-[${maxWidth}] !mx-auto`}
        >
          <Image
            priority
            src={images.genCapitaLogo}
            alt="logo"
            className="md:w-[180px] w-[110px]"
          />

          <div className="flex items-center gap-4">
            <div
              onClick={() => window.open("https://app.gencapita.com")}
              className=" cursor-pointer w-fit md:px-8 px-4 flex items-center justify-center md:h-[45px] h-[30px] bg-transparent border border-white transform -skew-x-12 rounded-[4px]"
            >
              <span className="transform skew-x-12 md:text-[14px] text-[12px] !text-white font-[600]">
                Login
              </span>
            </div>
            <div
              onClick={() => window.open("https://app.gencapita.com/signup")}
              className=" cursor-pointer w-fit md:px-6 px-4  flex items-center justify-center md:h-[45px] h-[30px] bg-[#2EB200] transform -skew-x-12 rounded-[4px]"
            >
              <span className="transform skew-x-12 md:text-[14px] text-[12px] !text-[#090A0B] font-[600]">
                Sign Up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navar
