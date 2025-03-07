"use client";
import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";


const ParentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="2xl:w-[1440px] max-w-[1440px] mx-auto">
        <Navbar />
        {children}
      </div>
      {/* <div className="bg-[#F9F9F9] " >
        <Footer />
      </div> */}
    </>
  );
};

export default ParentWrapper;
