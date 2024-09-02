import { images } from "@/theme";
import { Progress } from "antd";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface accountObjectProps {
  id: number;
  title: string;
  subcopy: string;
  icon: string;
}
interface props {
  openedTabId: number;
  setOpenedtabId: React.Dispatch<React.SetStateAction<number>>;
  theObject: accountObjectProps;
}

const CollapseAccountDetails = ({
  openedTabId,
  setOpenedtabId,
  theObject,
}: props) => {
  const [currentHeight, setCurrentHeight] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (currentHeight >= 1 || currentHeight <5) {
        setCurrentHeight(currentHeight + 1);
      }

      if (currentHeight === 5) {
        setCurrentHeight(1);
        setOpenedtabId(openedTabId + 1);
      }

      if (openedTabId === 4 && currentHeight === 5) {
        setOpenedtabId(1);
        setCurrentHeight(1);
      }
    }, 550);
  }, [currentHeight]);

  return (
    <div className="w-full">
      <div className="w-full hidden md:block !transition !duration-[1000ms] !ease-in-out">
        {openedTabId === theObject?.id ? (
          <div className="border border-[#F2F6FF] shadow-md p-4 rounded-2xl flex justify-between items-center   gap-4 ">
            <div className="flex justify-start items-start gap-4 ">
              <Image src={theObject?.icon} alt="" width={40} height={40} />
              <div className="flex justify-start items-start flex-col gap-4">
                <p className="2xl:text-[18px] text-[16px] font-[400] text-[#162930]">
                  {theObject?.title}
                </p>
                <p className="2xl:text-[16px] text-[14px] font-[200] text-[#00000099]">
                  {theObject?.subcopy}
                </p>
                <div className="flex justify-start items-center gap-1 cursor-pointer">
                  <p className="text-[13px] font-[600] text-[#2EB200]">
                    Join the Waitlist
                  </p>
                  <FaArrowRight className="text-[#2EB200]" />
                </div>
              </div>
            </div>

            <div className=" !transition !duration-[1000ms] !ease-in-out w-[8px] rounded-t-2xl rounded-b-2xl  h-[120px] bg-[#E5ECFB]  ">
              <div
                className={` ${
                  currentHeight === 1
                    ? "h-[20%]"
                    : currentHeight === 2
                    ? "h-[40%]"
                    : currentHeight === 3
                    ? "h-[60%]"
                    : currentHeight === 4
                    ? "h-[80%]"
                    : currentHeight === 5
                    ? "h-[100%]"
                    : " "
                } !transition !duration-[1000ms] !ease-in-out transition-height  bg-[#2EB200] rounded-t-2xl w-full`}
              />
            </div>
          </div>
        ) : (
          <div
            className="!px-4 2xl:!py-4 !py-2.5 w-full  flex justify-between items-center gap-4 cursor-pointer"
            onClick={() => {
              setOpenedtabId(theObject?.id)
            }}
          >
            <div className="flex justify-start items-center gap-4">
              <Image src={theObject?.icon} alt="" width={40} height={40} />
              <p className="2xl:text-[18px] text-[15px] font-[400] text-[#162930]">
                {theObject?.title}
              </p>
            </div>
            <Image src={images?.downCaret} alt="" width={24} height={24} />
          </div>
        )}
      </div>
      
      {/* For Mobile view */}
      <div className="  pr-6 py-4 flex justify-between items-center  md:hidden   gap-4 ">
        <div className="flex justify-start items-start gap-4 ">
          <Image src={theObject?.icon} alt="" width={40} height={40} />
          <div className="flex justify-start items-start flex-col gap-4">
            <p className="2xl:text-[18px] text-[16px] font-[400] text-[#162930]">
              {theObject?.title}
            </p>
            <p className="2xl:text-[16px] text-[14px] font-[200] text-[#00000099]">
              {theObject?.subcopy}
            </p>
            <div className="flex justify-start items-center gap-1 cursor-pointer">
              <p className="text-[12px] font-[200] text-[#2EB200]">
                Join the Waitlist
              </p>
              <FaArrowRight className="text-[#2EB200]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapseAccountDetails;
