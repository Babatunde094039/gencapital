
import { images } from "@/theme";
import Image from "next/image";
import React from "react";

const TermsCollapse = ({
  openedTabId,
  setOpenedtabId,
  theObject,
}: any) => {
  return (
    <div className="">
      <div className="lg:p-6 px-4 py-6 ">
        {openedTabId === theObject?.id ? (
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenedtabId(undefined)}
          >
            <div className="flex justify-start items-center gap-8 ">
              <Image src={images?.personal} alt="" width={40} height={40}  />
              <p className="text-[#111216] lg:text-[28px] text-[20px] font-[600] leading-[24px]">
                {theObject?.title}
              </p>
            </div>

            <div>
              <div>
                <Image src={images?.downCaret} alt="" width={24} height={24} />
              </div>
            </div>
          </div>
        ) : (
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenedtabId(theObject?.id)}
          >
            <div className="flex justify-start items-center gap-8 ">
              <Image src={images?.personal} alt="" width={40} height={40} />
              <p className="">
                {theObject?.title}
              </p>
            </div>

            <div>
              <div>
                <Image src={images?.downCaret} alt="" width={24} height={24} />
              </div>
            </div>
          </div>
        )}

        {openedTabId === theObject?.id && (
          <div className=" ">
            <p className="text-[#111216] text-[16px] font-[400] leading-[24px] mr-6 lg:mr-0">
              {theObject?.content}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsCollapse;
