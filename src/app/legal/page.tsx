"use client";

import React, { useEffect, useState } from "react";
import LegalHeader from "../components/legals";
import Terms from "../components/legals/terms";
import Privacy from "../components/legals/privacy";
import Standard from "../components/legals/standardFee";
import General from "../components/legals/general";
import Relationship from "../components/legals/relationship";
import Alpaca from "../components/legals/alpaca";
import Image from "next/image";
import { images } from "@/theme";
import ParentWrapper from "../components/parentWrapper/parentWrapper";
import Footer from "../components/footer";

const Legal = () => {
  const modifiedIndex =typeof window !== 'undefined' && window.localStorage && localStorage.getItem("selelectedTab");
  const [selelectedTab, setSelectedTab] = useState(
    parseInt(modifiedIndex as string) || 0
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const params =  new URLSearchParams(window.location.search)
  const doc =  params.get("doc");

  const tabList = [
    {
      name: "Terms & Conditions",
      Component: <Terms />,
    },

    {
      name: "Privacy Policy",
      Component: <Privacy />,
    },

    {
      name: "Standard Fees Schedule",
      Component: <Standard />,
    },
    {
      name: "General Disclosure",
      Component: <General />,
    },
    {
      name: "Relationship Summary",
      Component: <Relationship />,
    },
    {
      name: "Alpaca Disclosure",
      Component: <Alpaca />,
    },
  ];
  
  useEffect(()=>{
    if(doc == 'terms'){
      localStorage.setItem("selelectedTab", '0')
      setSelectedTab(0)
    }else if(doc == 'disclosure'){
      localStorage.setItem("selelectedTab", '3')
      setSelectedTab(3)
    }else if (doc == 'privacy'){
      localStorage.setItem("selelectedTab", '1')
      setSelectedTab(1)
    }
  },[])

  return (
    <>
  
    <ParentWrapper>
      <div className=" lg:mt-10  xl:px-20 lg:px-8  flex justify-start !gap-10 flex-col   ">
        <div className="min-w-[278px] w-[278px] hidden lg:block  sticky top-[120px]  bg-white z-0 ">
          {tabList.map((tabListDetails, index) => (
            <p
              key={index}
              className={`
            px-3 py-4 cursor-pointer  test11 ${
              selelectedTab === index
                ? "text-[16px] text-[#FCFCFC] font-[600] leading-[24px] bg-[#090A0B] rounded "
                : "text-[16px] text-[#60707A] font-[600] leading-[24px]"
            }
            
            `}
              onClick={() => {
                setSelectedTab(index);
                localStorage.setItem("selelectedTab", index.toString());
              }}
            >
              {tabListDetails.name}
            </p>
          ))}
        </div>
        <div className="sticky top-[40px] ">
          <div
            className="flex justify-between items-center md:px-8 p-4 bg-[#090A0B] lg:hidden cursor-pointer "
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <p className="text-[14px] font-[600] leading-[24px] text-[#FCFCFC]">
              {tabList[selelectedTab].name}
            </p>
            <Image src={images.downCaretWhite} alt="" width={24} height={24} />
          </div>
          {isDropdownOpen && (
            <div className="bg-transparent flex flex-col absolute w-full    z-[1000]   ">
              <div
                className="mx-[16px] md:mx-8 bg-white  p-[6px]  "
                style={{
                  boxShadow:
                    "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
                  borderRadius: "0px 0px 8px 8px",
                  border: "1px solid var(--Gray-200, #EAECF0)",
                }}
              >
                {tabList.map(({ name }, index) => (
                  <div
                    className={`${
                      selelectedTab === index
                        ? "bg-[#F9FAFB]   "
                        : "bg-transparent"
                    }  flex justify-between items-center gap-2 w-full  p-[14px] rounded-[6px] cursor-pointer  `}
                    key={index}
                    onClick={() => {
                      setSelectedTab(index);
                      setIsDropdownOpen(false);
                      localStorage.setItem("selelectedTab", index.toString());
                    }}
                  >
                    <p
                      className={`  text-[14px] font-[600] leading-[24px] text-[#60707A]   `}
                    >
                      {name}
                    </p>
                    {selelectedTab === index && (
                      <Image src={images.check} alt="" width={24} height={24} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className=" md:px-8 px-4 lg:px-0 w-full lg:pl-[300px] lg:mt-[-415px]  ">
          {tabList[selelectedTab].Component}
        </div>
      </div>
    </ParentWrapper>
     <div className="bg-[#F9F9F9] " >
     <Footer setSelectedTab={setSelectedTab}  />
   </div>
   </>
  );
};

export default Legal;
