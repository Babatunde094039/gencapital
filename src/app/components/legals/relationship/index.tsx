"use client";
import React from "react";
import LegalHeader from "..";
import Link from "next/link";
import { downloadFile } from "@/helpers";

const Relationship = () => {
  return (
    <div className="pb-[130px]">
      <LegalHeader title="Relationship Summary" />{" "}
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Client Relationship Summary
        </p>
        <div className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          Our Client Relationship Summaries highlight the nature of the
          brokerage and investment advisory relationships available at
          GenCapita, as well as how our brokerage and advisory services and fees
          differ.
          <br />
          <p
            className="!text-[#2EB200]"
            onClick={() =>
              downloadFile(
                "https://files.alpaca.markets/disclosures/library/FormCRS.pdf ",
                "Client-Relationship-Summary"
              )
            }
          >
            Form CRS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Relationship;
