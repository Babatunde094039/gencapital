"use client";
import { images } from "@/theme";
import Image from "next/image";
import test from "@/assets/stocksSection.svg";
import { InputNumberProps, Slider, SliderSingleProps } from "antd";
import { useState } from "react";
import Modals from "./components/modal";
import WaitList from "./components/forms/WaitList";
import Link from "next/link";
import { OpenSauceSans } from "@/utils/font";
import { maxWidth } from "@/helpers";
import EmailListSuccess from "./components/forms/EmailListSuccess";
import ChartComponent from "./components/chart";

export default function Home() {
  const [inputValue, setInputValue] = useState(150);
  const [isWaitListModalOpen, setIsWaitListModalOpen] = useState(false);
  const [isEmailListModalOpen, setIsEmailListModalOpen] = useState(false);
  const [steps, setSteps] = useState(1);
  const [emailStep, setEmailStep] = useState(2);
  const [emailInput, setEmailInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onChange: InputNumberProps["onChange"] = (newValue) => {
    setInputValue(newValue as number);
  };

  const formatter: NonNullable<SliderSingleProps["tooltip"]>["formatter"] = (
    value
  ) => `$${value}`;

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailInput
    );

  const handleSubmit = async () => {
    setIsSending(true);
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSeGBD_nCpvDwcDmkTD2QJMineEZA-YQ_kPjtcq7qccKPxkGIg/formResponse";
    try {
      let data = new FormData();
      data.append("entry.1636581897", emailInput);

      const response = await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      if (response) {
        setIsEmailListModalOpen(true);
        setIsSending(false);
        setEmailInput("");
      } else {
        setIsSending(false);
      }
    } catch {
      setIsSending(false);
    }
  };

  return (
    <main className="bg-white">
      {/* <div className="bg-[#061A01] w-full md:h-[80px] h-[72px] flex items-center fixed top-0 z-[100]">
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
      </div> */}
      <div className=" md:h-[820px] h-[670px] w-full bg-custom-gradient relative md:pt-[300px] pt-[250px]">
        <div
          className={`flex flex-col items-center justify-center pt-16 px-[5%] 2xl:w-full xl:w-[883px] md:px-0 max-w-[${maxWidth}] !mx-auto`}
        >
          <p
            className={`${OpenSauceSans.className} font-[700] 3xl:text-[92px] xl:text-[72px] md:text-[55px] text-[40px] text-center !text-[#FFFFFF] leading-[70px] md:leading-none`}
          >
            Smart Investing
          </p>
          <Link
            href={"https://app.gencapita.com/signup"}
            target='_blank'
            className="w-fit px-6 md:mt-10 mt-4 flex items-center justify-center h-[50px] bg-[#2EB200] transform -skew-x-12 font-[200] rounded-[4px]"
          >
            <span className="transform skew-x-12 text-[14px] font-[600] !text-[#090A0B]">
              Get Started
            </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-12 py-6">
        <p className="text-[14px] font-[500] text-[#000000]">
          GENCAPITA is proudly backed by
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Image
            priority
            src={images.nvidia}
            alt=""
            width={22}
            height={22}
            className="md:w-[45%] w-[35%] object-cover"
          />

          <Image
            priority
            src={images.microsoft}
            alt=""
            width={22}
            height={22}
            className="md:w-[45%] w-[35%] object-cover"
          />
        </div>
      </div>

      <div
        className={`xl:px-0 px-[5%] 2xl:px-0 lg:pt-[66px] pt-[64px] bg-white pb-[60px] xl:w-[1236px] flex flex-col relative transition duration-1000 ease-in-out gap-10 max-w-[${maxWidth}] !mx-auto`}
      >
        <div
          className={` bg-[#071A00] lg:py-[90px] lg:px-[50px] md:px-8 px-4 py-[40px] rounded-[16px] sticky top-[125px] overflow-hidden`}
        >
          <div className="2xl:w-[35%] xl:w-[40%] md:w-[50%] lg:pb-0 md:pb-[65%] pb-[230px]">
            <div className="flex justify-start items-start flex-col gap-4 pb-[25px] border-b border-[#3CE500] pr-10 ">
              <p className="text-white lg:text-[40px] text-[28px] font-bold lg:leading-[52px] pb-2 leading-[40px] tracking-[-1.38px] ">
                Invest in 12,000 US Stocks and ETFs
              </p>
            </div>

            <div className="pt-6 border-t border-[#3CE500] flex flex-col justify-start items-start gap-4">
              <div className="flex justify-start items-center gap-[13px] ">
                <Image
                  priority
                  src={images?.listIcon}
                  alt=""
                  width={13}
                  height={13}
                  unoptimized={true}
                />
                <p className="lg:text-[18px] text-[16px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
                  Notional & Fractional Trading
                </p>
              </div>

              <div className="flex justify-start items-center gap-[13px] ">
                <Image
                  priority
                  src={images?.listIcon}
                  alt=""
                  width={13}
                  height={13}
                />
                <p className="lg:text-[18px] text-[16px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
                  Market, Limit, Stop Limit Orders
                </p>
              </div>

              <div className="flex justify-start items-center gap-[13px] ">
                <Image
                  priority
                  src={images?.listIcon}
                  alt=""
                  width={13}
                  height={13}
                />
                <p className="lg:text-[18px] text-[16px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
                  Real-time Pricing
                </p>
              </div>

              <div className="flex justify-start items-center gap-[13px] ">
                <Image
                  priority
                  src={images?.listIcon}
                  alt=""
                  width={13}
                  height={13}
                />
                <p className="lg:text-[18px] text-[16px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
                  Millisecond Latency
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 2xl:w-[1150px] xl:w-[950px]  lg:w-[650px] w-full lg:h-[600px] 2xl:h-[700px]">
            <Image
              priority
              src={test}
              alt=""
              width={810}
              height={654}
              className="w-full h-full "
            />
          </div>
        </div>

        <div className="bg-[#071A00] rounded-2xl lg:py-[50px] lg:px-[50px] md:px-8 px-4 py-[40px] flex justify-between lg:flex-row gap-8 lg:gap-0 flex-col items-center sticky top-[180px]">
          <div className="2xl:w-[35%] xl:w-[40%] w-full pt-2 md:pt-0">
            <div className="flex justify-start items-start flex-col gap-4 pb-[25px] border-b border-[#3CE500] pr-5 ">
              <p className="text-white lg:text-[40px] text-[28px] font-bold lg:leading-[52px] leading-[40px] pb-2 tracking-[-1.38px] ">
                Earn 4% APY on Uninvested Cash
              </p>
            </div>

            <div className="pt-6 border-t border-[#3CE500] flex flex-col justify-start items-start gap-4">
              <div className="flex justify-start items-center gap-[13px] ">
                <Image
                  priority
                  src={images?.listIcon}
                  alt=""
                  width={13}
                  height={13}
                />
                <p className="lg:text-[18px] text-[16px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
                  No Lock-In Period
                </p>
              </div>

              <div className="flex justify-start items-center gap-[13px] ">
                <Image
                  priority
                  src={images?.listIcon}
                  alt=""
                  width={13}
                  height={13}
                />
                <p className="lg:text-[18px] text-[16px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
                  Competitive Yield
                </p>
              </div>

              <div className="flex justify-start items-center gap-[13px] ">
                <Image
                  priority
                  src={images?.listIcon}
                  alt=""
                  width={13}
                  height={13}
                />
                <p className="lg:text-[18px] text-[16px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
                  No Subscription Required
                </p>
              </div>

              <div className="flex justify-start items-center gap-[13px] ">
                <Image
                  priority
                  src={images?.listIcon}
                  alt=""
                  width={13}
                  height={13}
                />
                <p className="lg:text-[18px] text-[16px] font-[200] leading-[26px] tracking-[-0.2px] !text-white">
                  Insured by FDIC
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[70%]">
            <Image
              priority
              src={images?.paperMoney}
              alt=""
              width={88}
              height={53}
              className="!object-cover !w-[850px]"
            />
          </div>
        </div>
      </div>

      <div
        className={`bg-white lg:pt-[94px] py-[42px] px-[5%] xl:px-0 xl:w-[1240px] 2xl:px-0 max-w-[${maxWidth}] !mx-auto`}
      >
        <div className="flex flex-col  gap-2 lg:mb-[54px] mb-[32px]">
          <p className="lg:text-[36px] text-[28px] font-[400] tracking-[-0.82px] text-[#101828]">
            Coming Soon
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 justify-between items-center ">
          <div className="px-6 pt-6 pb-[24px] flex  flex-col justify-start items-center h-full lg:gap-8 gap-6  shadow-md   rounded-lg">
            <div className="w-full h-[240px] ">
              <Image
                priority
                src={images?.cardImage2}
                alt=""
                width={336}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-start items-start lg:gap-4 gap-2 flex-col">
              <p className="text-[#101828] lg:text-[20px] text-[18px] font-semibold leading-[31px]">
                GENiE
              </p>
              <p className="text-[#101828] md:text-[17px] text-[14px] font-[100] leading-[25px]">
                Your investing AI assistant that will help you stay ahead of the
                markets with instant insights.
              </p>
            </div>
          </div>

          <div className="px-6 pt-6 pb-[24px] flex  flex-col justify-start items-center h-full gap-8  shadow-md rounded-lg">
            <div className="w-full h-[240px] ">
              <Image
                priority
                src={images?.cardImage1}
                alt=""
                width={336}
                height={240}
                className="w-full h-full  object-cover"
              />
            </div>
            <div className="flex justify-start items-start lg:gap-4 gap-2 flex-col">
              <p className="text-[#101828] lg:text-[20px] text-[18px] font-semibold leading-[31px]">
                Market Tools
              </p>
              <p className="text-[#101828] md:text-[17px] text-[14px] font-[100] leading-[25px]">
                Advanced instruments for real-time market analysis like
                screener, heatmap, watchlist, and advanced charts.
              </p>
            </div>
          </div>

          <div className="px-6 pt-6 pb-[24px] flex  flex-col justify-start items-center h-full gap-8  shadow-md   rounded-lg">
            <div className="w-full h-[240px] ">
              <Image
                priority
                src={images?.cardImage3}
                alt=""
                width={336}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-start items-start lg:gap-4 gap-2 flex-col">
              <p className="text-[#101828] lg:text-[20px] text-[18px] font-semibold leading-[31px]">
                Learn
              </p>
              <p className="text-[#101828] md:text-[17px] text-[14px] font-[100] leading-[25px]">
                Educational resources, including tutorials and courses, to help
                users improve their financial knowledge and investment skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-12 mt-10">
        <div>
          <div
            className="lg:pb-[48px] pb-[4px] flex justify-between items-start px-[5%] xl:px-0 xl:w-[1240px] flex-col lg:flex-row lg:gap-8 gap-4  max-w-[1440px] !mx-auto"
            id="WaitList"
          >
            <div className="flex flex-col items-center lg:items-start">
              <Image
                priority
                src={images?.genCapitaLogo}
                alt="logo"
                width={148}
                height={19}
              />
            </div>

            <div className="flex flex-col lg:justify-end justify-center lg:items-end items-center ">
              <div className="flex lg:justify-end justify-center lg:items-end items-center gap-4 cursor-pointer">
                <Image
                  priority
                  src={images?.linkedIn}
                  alt=""
                  width={30}
                  height={30}
                  onClick={() =>
                    window.open(
                      // "https://whatsapp.com/channel/0029ValKZe1HwXbFg0zDPj2F"
                      "https://www.linkedin.com/company/genfinancial/"
                    )
                  }
                />
                <Image
                  priority
                  src={images?.twitter}
                  alt=""
                  width={30}
                  height={30}
                  onClick={() => window.open("https://x.com/gencapita")}
                />
                <Image
                  priority
                  src={images?.Insta}
                  alt=""
                  width={30}
                  height={30}
                  onClick={() =>
                    window.open("https://www.instagram.com/gencapita/")
                  }
                />
              </div>
            </div>
          </div>

          <div className="px-[5%] xl:px-0 xl:w-[1240px]  max-w-[1440px]  !mx-auto pb-16 pt-4 flex lg:flex-row flex-col-reverse justify-between ">
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:w-[45%] w-full">
              <div className="text-[#828F9B] cursor-pointer">
                <p className="font-[700] text-[14px] pb-4 mt-10 lg:mt-0">Product</p>
                <p className="text-[14px] font-[100]">Invest</p>
              </div>
              <div className="text-[#828F9B] cursor-pointer ">
                <p className="font-[700] text-[14px] pb-4 mt-10 lg:mt-0">Resources</p>
                <p className="text-[14px] font-[100] pb-4">Support</p>
                <p className="text-[14px] pb-4 font-[100]">GENie</p>
                <p className="text-[14px] font-[100]">Learn</p>
              </div>
              <div className="text-[#828F9B] cursor-pointer mt-10 lg:mt-0">
                <p className="font-[700] text-[14px] pb-4">Company</p>
                <p className="text-[14px] pb-4 font-[100]">About Us</p>
                <p className="text-[14px] pb-4 font-[100]">Newsroom</p>
                <p className="text-[14px] pb-4 font-[100]">Careers</p>
              </div>
              <div className="text-white cursor-pointer mt-10 lg:mt-0">
                <p className="font-[700] text-[14px] pb-4">
                  Legal & Regulatory
                </p>
                <p className="text-[14px] pb-4 font-[100]">Terms of Use</p>
                <p className="text-[14px] pb-4 font-[100]">Privacy Policy</p>
                <p className="text-[14px] pb-4 font-[100]">Disclosures</p>
              </div>
            </div>
            <div className="lg:w-[38%] w-full mt-6 lg:mt-0">
              <p className="md:text-[20px] text-[25px] text-white font-[600]">
                Stay Ahead with Smarter Investing
              </p>
              <p className="text-[14px] text-white font-[100] py-4">
                Get market insights, experts tips, and GENCAPITA updates in your
                inbox
              </p>

              <div className="flex flex-row justify-center items-center gap-1 w-full">
                <div className=" w-full transform -skew-x-12 bg-[#F5F5F5] rounded-md">
                  <input
                    placeholder="example@xyz.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="bg-transparent placeholder:font-[100] placeholder:text-[13px] lg:!py-4 !py-3 text-black font-[100] transform skew-x-12 focus:outline-none focus:border-none rounded-md w-full pl-8 "
                  />
                </div>
                <div
                  className={`md:w-[200px] w-[200px] flex items-center justify-center py-4 ${
                    emailInput && emailRegex
                      ? "cursor-pointer"
                      : "cursor-not-allowed"
                  } bg-[#2EB200] transform -skew-x-12 font-[200] rounded-md `}
                  onClick={() => {
                    if (emailInput && emailRegex) return handleSubmit();
                  }}
                >
                  <span className="transform skew-x-12 md:text-[14px] text-[#090A0B] text-[12px] font-[200]">
                    {isSending ? "Please wait..." : "Subscribe"}
                  </span>
                </div>
              </div>

              {emailInput && !emailRegex && (
                <div className="lg:w-[80%] xl:w-[600px] w-full md:flex item-center hidden justify-center xl:justify-start gap-2 mt-2">
                  <p className="flex justify-start items-start text-red-400 text-start text-xs font-[100]">
                    invalid email format
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Investments are risky. */}
          <div className="bg-[#2D3339] md:rounded-2xl rounded-3xl text-[12px] !font-[100] px-[5%] xl:px-0 xl:w-[1240px] max-w-[1440px] xl:mx-auto mx-4 ">
            <div className="md:py-9 py-7 md:px-7 px-1">
              <p className="pb-4">Investments are risky</p>
              <p className="pb-4">
                <b>Investment Accounts</b> are offered through GEN INVEST LLC
                (“GEN INVEST”), an investment adviser registered with the US
                Securities and Exchange Commission (“SEC”). GEN INVEST is a
                wholly-owned subsidiaries of Gen Financial Inc.
              </p>
              <p className="pb-4">
                <b>Brokerage services</b> are offered by Alpaca Securities LLC,
                a member of the Financial Regulatory Authority (FINRA) and the
                Securities Investor Protection Corporation (SIPC).
              </p>
              <p className="pb-4">
                <b>Custody services</b> of Investment Accounts are provided by
                Alpaca Securities LLC, member FINRA, NYSE, SIPC.
              </p>
              <p className="pb-4">
                Investing involves risk, including loss of principal. Past
                performance does not guarantee future results. Information
                provided on this platform is for educational and informational
                purposes only and does not constitute personalized financial,
                legal, or tax advice. Users are encouraged to consult with
                qualified professionals before making any financial decisions.
                Gen and its affiliates are not liable for investment decisions
                based on the information provided. Market data, articles, and
                tools available on the platform are sourced from reliable
                providers but are not guaranteed for accuracy, completeness, or
                timeliness.
              </p>
              <p className="pb-4">
                GEN INVEST LLC is a SEC-registered investment advisory firm. We
                may only conduct business in states in which we are registered
                or qualify for an exemption from registration requirements. All
                rights reserved. For more information about our advisory
                services, please view our ADV Part 2A Brochure and Part 3
                Relationship Summary at{" "}
                <span className="text-[#2EB200] cursor-pointer"
                 onClick={() =>
                  window.open(
                    "https://www.sec.gov"
                  )
                }
                >
                  https://www.sec.gov.
                </span>{" "}
                Free and simple tools are available to research firms and
                financial professionals at{" "}
                <span className="text-[#2EB200] cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.investor.gov/CRS"
                    )
                  }
                >
                  https://www.investor.gov/CRS
                </span>{" "}
                , which also provides educational materials about
                broker-dealers, investment advisers, and investing.
              </p>
              <p className="pb-4">
                By using this website, you understand the information being
                presented is provided for informational purposes only and agree
                to our Terms of Use and Privacy Policy. Gen and its affiliates
                make no representations that materials on this site are
                appropriate for use in all locations, or that transactions,
                securities products, instruments, or services discussed on this
                website are available or appropriate for sale or use in all
                jurisdictions, or are suitable for all investors or
                counterparties. Those who access this website do so at their own
                initiative and are responsible for compliance with applicable
                local laws and regulations.
              </p>
              <div className="pb-2 text-[#2EB200]">
                <span
                  className="border-r border-[#2EB200] pr-2 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://adviserinfo.sec.gov/firm/summary/333196"
                    )
                  }
                >
                  FINRA’s AdvisorsCheck
                </span>
                <span
                  className="pl-2 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://reports.adviserinfo.sec.gov/crs/crs_333196.pdf"
                    )
                  }
                >
                  Customer Relationship Summary
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full flex flex-col items-center py-10 text-[#A7B3B9] text-[12px] font-[100]">
            <p className=""> GEN. 276 5th Ave, Ste 704, New York, NY 10001</p>
            <p className="">
              © {new Date().getFullYear()} GENCAPITA™. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <Modals
        open={isWaitListModalOpen}
        setOpen={setIsWaitListModalOpen}
        step={steps}
      >
        <WaitList
          steps={steps}
          setSteps={setSteps}
          setOpen={setIsWaitListModalOpen}
        />
      </Modals>

      <Modals
        open={isEmailListModalOpen}
        setOpen={setIsEmailListModalOpen}
        step={emailStep}
      >
        <EmailListSuccess setOpen={setIsEmailListModalOpen} />
      </Modals>
    </main>
  );
}
