import { images } from "@/theme";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

interface props {
  setOpen : Dispatch<SetStateAction<boolean>>
}
const EmailListSuccess = ({setOpen
}:props ) => {
  
  return (
    <div className="lg:px-6 px-5 pt-6 pb-10">
 
        <div className="  flex justify-center items-center flex-col  w-full">
          <Image
            src={images?.succssList}
            alt=""
            width={352}
            height={208}
            className="rounded-[8px] w-full "
          />
          <div className="flex justify-center items-center flex-col mt-6">
            <p className="text-start text-[18px] text-[#101828] font-[600]">
              You're on the List!
            </p>
            <p className="text-start text-[14px] text-[#475467] font-[400] mt-1">
              Thank you for joining.
            </p>
          </div>

          <div
              className="md:w-[140px] w-[100px] mt-[16px] flex items-center justify-center md:h-[50px] h-[40px] bg-[#2EB200] transform -skew-x-12 font-[200] rounded-md cursor-pointer"
              onClick={() => {
                setOpen(false)
              }}
            >
              <span className="transform skew-x-12 md:text-[15px] text-white text-[12px] font-[500]">
                Okay
              </span>
            </div>
        </div>
    </div>
  );
};

export default EmailListSuccess;
