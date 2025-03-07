import { images } from "@/theme";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import pattern from "@/assets/icons/Frame6535.svg";
interface FooterProps {
  setSelectedTab?: React.Dispatch<React.SetStateAction<number>> | undefined;
}
const Footer = ({ setSelectedTab }: FooterProps) => {
  return (
    <div
      className="  2xl:w-[1440px] max-w-[1440px] mx-auto xl:px-20 md:px-8 px-4 pt-10 !z-10  bg-[#F9F9F9] "
      style={{
        backgroundImage: `url(${pattern.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        // backgroundSize : '100% 250px'
      }}
    >
      <div className="flex justify-between items-center mb-10 lg:mb-[64px] md:flex-row flex-col gap-8 ">
        <div className="flex justify-start items-center gap-8 md:gap-10 md:flex-row flex-col">
          <Link href={"/"}>
            <Image
              src={images.logo}
              alt=""
              width={150}
              height={19}
              className="lg:!w-[150px] !w-[120px] lg:!h-[19px] !h-[16px] "
            />
          </Link>
          <div className="flex justify-start items-center gap-4">
            <Link
              href={""}
              className="text-[14px] text-[#383D41] font-[400] leading-[21px]  "
              onClick={() => setSelectedTab && setSelectedTab(0)}
            >
              Terms of Use
            </Link>

            <Link
              href={""}
              className="text-[14px] text-[#383D41] font-[400] leading-[21px]  "
              onClick={() => setSelectedTab && setSelectedTab(1)}
            >
              Privacy Policy
            </Link>

            <Link
              href={""}
              className="text-[14px] text-[#383D41] font-[400] leading-[21px]  "
              onClick={() => setSelectedTab && setSelectedTab(3)}
            >
              Disclosures
            </Link>
          </div>
        </div>

        <div className="flex justify-end items-center gap-4">
          <Link href={""}>
            <Image src={images.linkedIn} alt="" width={24} height={24} />
          </Link>

          <Link href={""}>
            <Image src={images.twitter} alt="" width={24} height={24} />
          </Link>
          <Link href={""}>
            <Image src={images.Insta} alt="" width={24} height={24} />
          </Link>
        </div>
      </div>

      <div className="bg-[#ECEFF4] md:p-8 p-4 rounded-[24px]">
        <p className="text-[#383D41] text-[10px] md:text-[12px] leadinng-[16px] lg:leading-[18px] ">
          Investments are risky.
          <br />
          <br />
          <span className="font-[700]"> Investment Accounts</span> are offered
          through Gen Invest LLC (“Gen Invest”), an investment adviser
          registered with the US Securities and Exchange Commission (“SEC”). 
          <br />
          <br />
          <span className="font-[700]"> Brokerage services</span> are offered by
          [Alpaca Securities LLC], a member of the Financial Regulatory
          Authority (FINRA) and the Securities Investor Protection Corporation
          (SIPC).
          <br />
          <br /> <span className="font-[700]"> The GENCAPITA Aspire</span> is an
          investment account offered by GENCAPITA through Gen Invest. 
          <br />
          <br /> Gen Invest, GENCAPITA, and Gen Financial (Nigeria) Limited are
          affiliated and wholly-owned subsidiaries of Gen Financial Inc.
          Investment products offered by Gen Invest are not FDIC insured and
          involve risk. Client may loose their principal.
          <br />
          <br /> Gen Invest, GENCAPITA, and Gen Financial (Nigeria) Limited are
          affiliated companies and wholly-owned subsidiaries of Gen Financial
          Inc. Investing involves risk, including loss of principal. Past
          performance does not guarantee future results. Information provided on
          this platform is for educational and informational purposes only and
          does not constitute personalized financial, legal, or tax advice.
          Users are encouraged to consult with qualified professionals before
          making any financial decisions. Gen and its affiliates are not liable
          for investment decisions based on the information provided. Market
          data, articles, and tools available on the platform are sourced from
          reliable providers but are not guaranteed for accuracy, completeness,
          or timeliness. <br />
          <br /> Gen Invest LLC is a SEC-registered investment advisory firm. We
          may only conduct business in states in which we are registered or
          qualify for an exemption from registration requirements. All rights
          reserved. For more information about our advisory services, please
          view our ADV Part 2A Brochure and Part 3 Relationship Summary at{" "}
          <Link
            href={"https://www.sec.gov"}
            className="!text-[#1E580F] underline"
          >
            https://www.sec.gov
          </Link>{" "}
          . Free and simple tools are available to research firms and financial
          professionals at{" "}
          <Link
            href={"https://www.investor.gov/CRS"}
            className="!text-[#1E580F] underline"
          >
            https://www.investor.gov/CRS
          </Link>{" "}
          , which also provides educational materials about broker-dealers,
          investment advisers, and investing. 
          <br />
          <br />
          By using this website, you understand the information being presented
          is provided for informational purposes only and agree to our{" "}
          <Link href={""} className="font-[700] text-[#0A3201]">
            {" "}
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href={""} className="font-[700] text-[#0A3201]">
            {" "}
            Privacy Policy
          </Link>{" "}
          . Gen and its affiliates make no representations that materials on
          this site are appropriate for use in all locations, or that
          transactions, securities products, instruments, or services discussed
          on this website are available or appropriate for sale or use in all
          jurisdictions, or are suitable for all investors or counterparties.
          Those who access this website do so at their own initiative and are
          responsible for compliance with applicable local laws and regulations.
        </p>

        <div className="flex justify-start items-center gap-2 mt-4 ">
          <Link
            href={""}
            className="font-[600] text-[#1E580F] text-[10px] md:text-[12px] leading-[18px] underline !text-nowrap "
          >
            FINRA’s AdvisorsCheck
          </Link>
          <Link
            href={""}
            className="font-[600] text-[#1E580F] text-[10px] md:text-[12px] leading-[18px] underline !text-nowrap pl-2 border-l border-[#1E580F] "
          >
            Customer Relationship Summary
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 flex-col text-center mt-8 pb-[64px]">
        <p className="text-[#60707A] text-[12px] font-[400] leading-[18px]">
          Gen. 276 5th Ave, Ste 704, New York, NY 10001
        </p>
        <p className="text-[#60707A] text-[12px] font-[400] leading-[18px]">
          © Copyright 2025, Gen. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
