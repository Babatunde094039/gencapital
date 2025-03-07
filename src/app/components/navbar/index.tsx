import { images } from "@/theme";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="lg:h-[80px] h-[40px]  xl:px-20 md:px-8 pl-4 pr-3 flex  items-center sticky top-0 !bg-white z-[1000] ">
      <div className="flex justify-between items-center w-full ">
        <div className="flex justify-start items-center lg:gap-6 xl:gap-10">
          <Link href={"/"}>
            <Image
              src={images.logo}
              alt=""
              width={150}
              height={19}
              className="lg:!w-[150px] !w-[120px] lg:!h-[19px] !h-[16px] "
            />
          </Link>
          <div className="lg:flex justify-start items-center py-3 lg:gap-6 xl:gap-10 hidden">
            <div className="flex justify-start items-center gap-1">
              <p className="text-[14px] text-[#383D41] font-[500] leading-[21px]  ">
                Product
              </p>
              <Image src={images.downcaret} alt="" width={14} height={14} />
            </div>
            <Link
              href={""}
              className="text-[14px] text-[#383D41] font-[500] leading-[21px]  "
            >
              Learn
            </Link>
            <Link
              href={""}
              className="text-[14px] text-[#383D41] font-[500] leading-[21px]  "
            >
              Support
            </Link>
          </div>
        </div>

        <div className="lg:flex justify-end items-center lg:gap-4 xl:gap-4 hidden">
          {/* <div className="border border-[#E8EBED] rounded-[100px] flex justify-center items-center w-fit gap-1 pl-1 py-1 pr-2">
            <Image src={images.usIcon} alt="" width={18} height={18} />
            <p className="text-[#383D41] text-[14px] font-[500]  ">EN</p>
          </div> */}

         
          {/* <Link
            href={""}
            className="text-[14px] text-[#090A0B] border border-[#0A3201] font-[600] leading-[21px] h-[48px] w-[140px] flex justify-center items-center transform -skew-x-12 rounded  "
          >
           Log In
          </Link>
          <Link
            href={""}
            className="text-[14px] text-[#090A0B] font-[600] bg-[#2EB200] leading-[21px] h-[48px] w-[140px] flex justify-center items-center transform -skew-x-12 rounded  "
          >
            Sign Up
          </Link> */}
          <div
              onClick={() => window.open("https://app.gencapita.com")}
              className=" cursor-pointer  w-[124px] md:px-8 px-4 flex items-center justify-center md:h-[45px] h-[30px] bg-transparent border border-[#0A3201]  transform -skew-x-12 rounded-[4px]"
            >
              <span className="transform skew-x-12 md:text-[14px] text-[12px] !text-[#090A0B] font-[600]">
              Log In
              </span>
            </div>
            <div
              onClick={() => window.open("https://app.gencapita.com/signup")}
              className=" cursor-pointer  w-[124px] md:px-6 px-4  flex items-center justify-center md:h-[45px] h-[30px] bg-[#2EB200] transform -skew-x-12 rounded-[4px]"
            >
              <span className="transform skew-x-12 md:text-[14px] text-[12px] !text-[#090A0B] font-[600]">
                Sign Up
              </span>
            </div>
        </div>
        <div className="lg:hidden block">
          <Image src={images.menu} alt="" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
