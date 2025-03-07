import React from "react";
import pattern2 from "@/app/assets/icons/test.svg";
import pattern from "@/app/assets/icons/Frame338.svg";
import pattern3 from "@/app/assets/icons/Clip.svg";

interface LegalHeaderProps {
  title: string;
}

const LegalHeader = ({ title }: LegalHeaderProps) => {
  return (
    <div
        // style={{
        //   backgroundImage: `url(${pattern2.src})`,
        //   backgroundRepeat: "no-repeat",
        // }}
      className="lg:px-[58px] lg:py-[47px] px-[37px] py-[28px] lg:text-start text-center bg-[#090A0B] rounded"
    >
      <p className="text-[#A7B3B9] text-[12px] lg:text-[14px] font-[400] lg:font-[500]  ">
        Updated November 30, 2024
      </p>

      <p className="text-[#FCFCFC] text-[28px] lg:text-[46px] font-[600] lg:font-[700] leading-[36px] lg:leading-[68px] mt-2 lg:mt-4 ">
        {title}
      </p>
    </div>
  );
};

export default LegalHeader;
