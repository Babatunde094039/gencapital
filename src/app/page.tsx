"use client";
import { images } from "@/theme";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import test from "@/assets/stocksSection.svg";
import ParentCollapse from "./components/collapse/parentCollapse";
import {
  InputNumberProps,
  Slider,
  SliderSingleProps,
} from "antd";
import { useState } from "react";
import ChartComponent from "./components/chart";
import Modals from "./components/modal";
import WaitList from "./components/forms/WaitList";
import Link from "next/link";
import { OpenSauceSans } from "@/utils/font";
import { maxWidth } from "@/helpers";
import EmailListSuccess from "./components/forms/EmailListSuccess";

export default function Home() {
  const [inputValue, setInputValue] = useState(150);
  const [isWaitListModalOpen, setIsWaitListModalOpen] = useState(false);
  const [isEmailListModalOpen, setIsEmailListModalOpen] = useState(false);
  const [steps, setSteps] = useState(1);
  const [emailStep, setEmailStep] = useState(2);
  const [emailInput, setEmailInput] = useState('')
  const [isSending, setIsSending] =  useState(false)

  const onChange: InputNumberProps["onChange"] = (newValue) => {
    setInputValue(newValue as number);
  };

  const formatter: NonNullable<SliderSingleProps["tooltip"]>["formatter"] = (
    value
  ) => `$${value}`;

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    emailInput
  )

  const handleSubmit = async ()=> {
    setIsSending(true)
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeGBD_nCpvDwcDmkTD2QJMineEZA-YQ_kPjtcq7qccKPxkGIg/formResponse';
    try{
      let data = new FormData();
      data.append('entry.1636581897', emailInput);
  
      const response = await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });
  
      if (response) {
        setIsEmailListModalOpen(true)
        setIsSending(false)
        setEmailInput('')
      } else {
        setIsSending(false)
      }
    }catch{
      setIsSending(false)
    }
  }

  return (
    <main className="bg-white">
        <div className="bg-[#061A01] w-full md:h-[80px] h-[72px] flex items-center fixed top-0 z-[100]">
          <div className={`flex justify-between items-center bg-[#061A01] xl:w-[1280px] w-full h-[56px] xl:px-[32px] px-[8%] py-5 max-w-[${maxWidth}] !mx-auto`}>
            <Image
              priority
              src={images.genCapitaLogo}
              alt="logo"
              className="md:w-[180px] w-[120px]"
            />
            <Link href={'#WaitList'} className="2xl:w-[155px] md:w-[140px] w-[100px] flex items-center justify-center md:h-[50px] 2xl:h-[55px] h-[40px] bg-[#2EB200] transform -skew-x-12 font-[200] rounded-md">
              <span className="transform skew-x-12 2xl:text-[16px] md:text-[15px] text-[12px] !text-[#FFFFFF]">
                Join the Waitlist{" "}
              </span>
            </Link>
          </div>
        </div>
        <div className=" h-[771px] w-full bg-custom-gradient relative mt-[72px]">
          <div className={`flex flex-col items-center justify-center pt-16 px-[5%] 2xl:w-full xl:w-[883px] md:px-0 max-w-[${maxWidth}] !mx-auto`}>
            <p className={`${OpenSauceSans.className} font-[700] 3xl:text-[92px] xl:text-[82px] lg:text-[68px] text-[55px] text-center !text-[#FFFFFF] leading-[70px] md:leading-none`}>
              Intelligent Investing
            </p>
            <p className="3xl:text-[24px] md:text-[22px] text-[18px] md:w-[48%] xl:w-[626px] w-[200px] text-center font-[100] mt-6 !text-[#FFFFFF]">
              Connecting investors to global opportunities.
            </p>
            <Link href={'#WaitList'} className="2xl:w-[155px] w-[140px] mt-8 flex items-center justify-center 2xl:h-[55px] h-[50px] bg-[#2EB200] transform -skew-x-12 font-[200] rounded-md">
              <span className="transform skew-x-12 2xl:text-[16px] text-[15px] !text-white">
                Join the Waitlist{" "}
              </span>
            </Link>
          </div>

          <Image
            priority
            src={images.iPhone}
            alt="iphone"
            width={20}
            height={20}
            quality={100}
            className="absolute mt-[24rem] inset-0 mx-auto w-[313px] h-full"
          />
        </div>

      <div className={`bg-white lg:gap-8 md:mt-[400px] mt-[430px] px-[5%] xl:px-0 xl:w-[1240px] 2xl:px-0 pb-[50px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-between items-center md:gap-y-[80px] gap-y-[32px] max-w-[${maxWidth}] !mx-auto`}>
        <div className="flex md:justify-start items-center  gap-4 md:flex-row flex-col justify-center text-center md:text-start ">
          <Image priority src={images?.buysell} alt="" width={90} height={90} className='2xl:w-[80px] w-[70px]'/>
          <p className="xl:text-[18px] text-[16px] text-[#162930] font-[200] leading-[26px] tracking-[-0.2px] xl:w-[226px] 2xl:w-full md:w-full w-[230px]  2xl:pr-10">
            Buy/Sell global assets
          </p>
        </div>
        <div className="flex md:justify-start items-center  gap-4 md:flex-row flex-col justify-center text-center md:text-start  ">
          <Image
            priority
            src={images?.portfolio}
            alt=""
            width={90}
            height={90}
            className='2xl:w-[80px] w-[70px]'
          />
          <p className="xl:text-[18px] text-[16px] text-[#162930] font-[200] leading-[26px] xl:w-[246px] 2xl:w-full md:w-full w-[210px] tracking-[-0.2px] 2xl:pr-10">
            Portfolio Management AI
          </p>
        </div>
        <div className="flex md:justify-start items-center  gap-4 md:flex-row flex-col justify-center text-center md:text-start  ">
          <Image priority src={images?.trade} alt="" width={90} height={90} className='2xl:w-[80px] w-[70px]'/>
          <p className="xl:text-[18px] text-[16px] text-[#162930] font-[200] leading-[26px]  xl:w-[246px] 2xl:w-full md:w-full w-[210px] tracking-[-0.2px]  2xl:pr-10">
            Trade with advanced tools
          </p>
        </div>
        <div className="flex md:justify-start items-center  gap-4 md:flex-row flex-col justify-center text-center md:text-start  ">
          <Image priority src={images?.money} alt="" width={90} height={90} className='2xl:w-[80px] w-[70px]'/>
          <p className="xl:text-[18px] text-[16px] text-[#162930] font-[200] leading-[26px] tracking-[-0.2px] 2xl:pr-10 md:w-[65%] w-[230px] ">
            Seamless money management
          </p>
        </div>{" "}
        <div className="flex md:justify-start items-center gap-4 md:flex-row flex-col justify-center text-center md:text-start  ">
          <Image
            priority
            src={images?.security}
            alt=""
            width={90}
            height={90}
            className='2xl:w-[80px] w-[70px]'
          />
          <p className="xl:text-[18px] text-[16px] text-[#162930] font-[200] xl:w-[246px] 2xl:w-full md:w-full w-[230px] leading-[26px] tracking-[-0.2px]  2xl:pr-10">
            {" "}
            Robust security and protection
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="text-[#000000B2] font-[200] xl:text-[18px] text-[16px]">
            Have questions?
          </span>
          <p className="flex items-center gap-2 font-[600] xl:text-[16px] text-[14px] text-[#2EB200] cursor-pointer"
             onClick={() => setIsWaitListModalOpen(true)}
          >
            Contact us <FaArrowRight />
          </p>
        </div>
      </div>

      <div className={`xl:px-0 px-[5%] 2xl:px-0 lg:pt-[66px] pt-[64px] bg-white pb-[60px] xl:w-[1236px] flex flex-col relative transition duration-1000 ease-in-out gap-10 max-w-[${maxWidth}] !mx-auto`}>
        <div className={` bg-[#071A00] lg:py-[90px] lg:px-[50px] md:px-8 px-4 py-[40px] rounded-[16px] sticky top-[125px] overflow-hidden`}>
          <div className="2xl:w-[35%] xl:w-[40%] md:w-[50%] lg:pb-0 md:pb-[65%] pb-[230px]">
            <div className="flex justify-start items-start flex-col gap-4 pb-[25px] border-b border-[#3CE500] pr-10 ">
              <p className="text-white lg:text-[40px] text-[28px] font-bold md:leading-[48px] leading-[40px] tracking-[-1.38px] ">
                Trading Global <br /> Securities
              </p>
              <p className="text-white lg:text-[18px] text-[16px] font-[100] leading-[31px] tracking-[-0.24px] ">
              US and global stocks, bonds, mutual funds, commodities, etc.
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
              <p className="text-white lg:text-[40px] text-[28px] font-bold leading-[38px] tracking-[-1.38px] ">
                Moving Money
              </p>
              <p className="text-white lg:text-[18px] text-[16px] font-[100] leading-[31px] tracking-[-0.24px] ">
                 Deposit, convert, and withdraw from anywhere globally.
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
                  Multi-currency Wallets
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
                  Instant Deposits and Withdrawals
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
                  Up to 4x Margin to Trade
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
                  Settlement Support
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

        <div className="bg-[#071A00] w-full rounded-2xl 2xl:py-[100px] lg:py-[50px] lg:px-[40px] 2xl:px-[60px] md:px-8 px-4 py-[40px] flex justify-between lg:flex-row flex-col gap-8 lg:gap-0 items-center sticky top-[150px] ">
          <div className="2xl:w-[35%] xl:w-[40%] w-full pt-2 md:pt-0">
            <div className="flex justify-start items-start flex-col gap-4 pb-[25px] border-b border-[#3CE500] pr-10 ">
              <p className="text-white lg:text-[40px] text-[28px] font-bold leading-[38px] tracking-[-1.38px] ">
                The Power of AI
              </p>
              <p className="text-white lg:text-[18px] text-[16px] font-[100] leading-[31px] tracking-[-0.24px] ">
                Analyze data, predict market trends, and automate trading.
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
                  Tailored algorithm for smart decisions
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
                  Automated Portfolio Optimization
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
                  Predictive Market Analytics
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
                <p className="lg:text-[18px] text-[16px]font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
                  Intelligent Security Solutions
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[100] xl:pr-20">
            <Image
              priority
              src={images?.CircleImage}
              alt=""
              width={20}
              height={20}
              className="xl:w-[470px] w-[420px] "
            />
          </div>
        </div>
      </div>

      {/* <div className="bg-[#F9FAFB]">
        <div className={`lg:py-[50px] md:py-[64px] py-[44px] pb-[40px] px-[5%] xl:px-0 2xl:px-0 xl:w-[1240px] max-w-[${maxWidth}] !mx-auto`}>

            <p className="lg:text-[38px] text-[32px] md:font-bold font-[400] text-[#111216] px-[3%] md:px-0 text-center mb-[40px] lg:mb-[50px]">
              Imagine you invested a year ago.
            </p>
            <div className="flex justify-between items-center  gap-8 mb-8  flex-col lg:flex-row">
              <div className="bg-white rounded-[18px] lg:px-[24px] px-[13px] lg:py-[18px] py-[9px]    w-full h-full flex justify-between items-center cursor-pointer">
                <div className=" flex justify-start items-center lg:gap-[18px] gap-[9px] ">
                  <div className="lg:w-[62px] lg:h-[62px] w-[33px] h-[33px]">
                  <Image priority src={images.NVDA} alt="" width={62} height={62} />

                  </div>
                  <div>
                    <p className="lg:text-[28px] text-[16px] font-[100] text-black  ">NVDA</p>
                    <p className="lg:text-[16px] text-[14px] font-[100] text-[#00000080]  ">
                      NVIDIA Corporation
                    </p>
                  </div>
                </div>

                <div className=" flex justify-end items-center gap-[18px]">
                  <div>
                    <p className="text-[#000000CC] lg:text-[28px] text-[16px] font-[200] ">
                      $19.53
                    </p>
                    <p className="text-[#2EB200] lg:text-[16px] text-[14px] font-[200] text-end ">
                      +0.53%
                    </p>
                  </div>
                  <Image priority src={images.downCaret} alt="" />
                </div>
              </div>

              <div className="lg:px-[24px] px-[13px] lg:py-[18px] py-[9px] flex flex-col justify-start items-start w-full h-full  gap-1 bg-[white] rounded-[18px] ">
                <p className="text-[#00000099] lg:text-[16px] text-[14px] font-[200] ">
                  Set Amount
                </p>
                <Slider
                  min={100}
                  max={1000}
                  onChange={onChange}
                  defaultValue={150}
                  value={inputValue}
                  tooltipVisible={false}
                  step={10}
                  className="!w-full"
                  tooltip={{ formatter }}
                />
                <div className="flex justify-between items-center w-full">
                  <p className="text-[#00000099] lg:text-[16px] text-[14px] font-[200]  flex justify-start items-center text-start gap-[7px] ">
                    Amount: <span className="text-black font-[600] ">${inputValue}</span>
                  </p>
                  <p className="text-[#00000099] lg:text-[16px] text-[14px] font-[200]  flex justify-start items-center text-start gap-[7px] ">
                    Quantity :<span className="text-black font-[600] ">5.12</span>
                  </p>
                </div>
              </div>
            </div>

            <ChartComponent />
            <div className="md:mt-8 mt-10 flex justify-center items-center gap-[12px] flex-col">
              <p className="text-[#00000099] lg:text-[16px] text-[14px] font-[200] text-center">
                You will have
              </p>
              <div className="justify-center items-center flex gap-[6px]  ">
                <p className="text-[#000000] text-[36px] font-[400] ">$536.11</p>
                <p className="text-[#2EB200] lg:text-[16px] text-[14px] font-[600] text-end ">
                  +436.11%
                </p>
              </div>
            </div>
        </div>
      </div> */}

      <div className={`bg-white lg:py-[64px] py-[42px] px-[5%] xl:px-0 xl:w-[1240px] 2xl:px-0 max-w-[${maxWidth}] !mx-auto`}>
        <div className="flex flex-col  gap-2 lg:mb-[64px] mb-[32px]">
          <p className="lg:text-[36px] text-[28px] font-[400] tracking-[-0.82px] text-[#101828]">
            Also Coming Soon
          </p>
          <p className="lg:text-[18px] text-[16px] font-[100] leading-[26px] tracking-[-0.2px] text-[#475467]">
            Case studies from some of our amazing customers who are building
            faster.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 justify-between items-center ">
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
              <p className="text-[#101828] 2xl:text-[16px] lg:text-[15px] text-[14px] font-[100] leading-[25px]">
                Advanced instruments for real-time market analysis like
                screener, heatmap, watchlist, and advanced charts.
              </p>
            </div>
          </div>

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
                Community
              </p>
              <p className="text-[#101828] 2xl:text-[16px] lg:text-[15px] font-[100] leading-[25px]">
                A proprietary platform for users to connect, share insights, and
                collaborate on investment strategies.
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
                Learning
              </p>
              <p className="text-[#101828] 2xl:text-[16px] lg:text-[15px] text-[14px] font-[100] leading-[25px]">
                Educational resources, including tutorials and courses, to help
                users improve their financial knowledge and investment skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFB] flex flex-col justify-center items-center mb-20 mt-8 py-8">
        <p className="text-[16px] font-[600] text-[#071A00]">Backed By</p>
        <div className="flex items-center justify-center gap-4 mt-4">

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

      <div className="bg-[#F9FAFB]">
        <div className={`lg:py-[86px] py-[64px] px-[5%] 2xl:px-0 flex justify-between flex-col-reverse lg:flex-row gap-6 lg:gap-[64px] w-full xl:px-0 xl:w-[1240px] max-w-[${maxWidth}] !mx-auto`}>
          <div className="lg:w-[50%]">
            <Image
              priority
              src={images.womenLaughing}
              alt=""
              width={76}
              height={92}
              className="w-full h-[500px] 2xl:h-[550px] object-cover"
            />
          </div>

          <div className="  lg:w-[50%] w-full ">
            <p className="text-[#101828] lg:text-[40px] text-[22px] font-[400] 2xl:leading-[45px] md:leading-[42px] leading-[28px]"> 
              There’s a brokerage account tailored to everyone
            </p>

            <ParentCollapse />
          </div>
        </div>
      </div>

      <div className={`bg-[white] md:pt-[80px] pt-[70px] xl:px-0 xl:w-[1240px] max-w-[${maxWidth}] !mx-auto`}>
        <div className="flex justify-center items-center mb-[64px] px-[5%]">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-[#101828] lg:text-[32px] text-[28px]  font-[600]">
              Enterprise Solutions
            </p>

            <p className="text-[#475467] lg:text-[16px] text-[14px] leading-[28px]  font-[100]  lg:w-[55%] text-center">
              Brokers, asset managers, and fintechs can leverage Gen Capita's
              power to provide clients access to global securities and
              investment tools.
            </p>

            <p className="text-[#344054] lg:text-[14px] text-[13px] mt-2 font-[400] border border-[#1CCD15] px-10 py-3 rounded-[8px] cursor-pointer"
              onClick={() => setIsWaitListModalOpen(true)}
            >
              Contact Sales
            </p>
          </div>
        </div>

        <div className="px-[5%] xl:px-0">
          <div className="w-full  ">
            <Image
              priority
              src={images?.overView}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className={`pt-[100px] md:pb-[20px] pb-[80px] px-[5%]  xl:px-0 xl:w-[1240px] max-w-[${maxWidth}] !mx-auto`}>
          <div className="flex justify-around items-center md:px-[6%] flex-col lg:flex-row lg:items-center md:gap-12 gap-0 lg:gap-0">
            <div className="w-full flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <p className="lg:text-[40px] 2xl:text-[44px] text-[30px] font-semibold md:px-0 px-4 w-full lg:leading-[50px] 2xl:leading-[55px] leading-[40px] text-white text-center lg:text-start">
                Join the Gen Capita <br /> Channel
              </p>
              <div className="px-[15px] py-[20px] flex items-center justify-center md:h-[50px] h-[38px] bg-[white] cursor-pointer transform -skew-x-12 font-[200] rounded-md md:mt-8 mt-6"
                onClick={()=> window.open('https://whatsapp.com/channel/0029ValKZe1HwXbFg0zDPj2F')}
              >
                <span className="transform skew-x-12 md:text-[14px] text-[12px] text-black">
                  Join the Channel
                </span>
              </div>
            </div>


            <Image
              priority
              src={images.phoneFrame}
              alt=""
              width={20}
              height={50}
              className="xl:w-[520px] md:w-[380px] w-full object-cover mt-[90px] md:mt-0 mb-[60px] md:mb-0 md:object-contain h-[500px]"
            />
          </div>

          <div className="lg:my-[140px] mt-[46px] lg:p-[64px] py-[56px] px-[16px]  bg-white rounded-[24px] flex flex-col justify-center items-center ">
            <div className="lg:!w-[80%] xl:!w-[780px] !w-full  flex justify-center items-center flex-col gap-4 mb-5">
              <p className="text-[#161616] text-center lg:text-[40px] text-[32px] md:font-[700] font-[400] lg:leading-[50px]  ">
                Take Charge. Invest Intelligently.
              </p>
              <p className="text-[#161616] text-center lg:text-[18px] text-[16px] w-[60%] md:w-full font-[100] leading-[31px]  ">
                Sign up now and stay ahead of the curve.
              </p>
            </div>

            <div className="flex md:flex-row flex-col justify-center items-center gap-1 w-full">
              <div className="lg:w-[40%] w-full transform -skew-x-12 bg-[#F5F5F5]">
                <input
                  placeholder="Enter email address"
                  value={emailInput}
                  onChange={(e)=> setEmailInput(e.target.value)}
                  className="bg-transparent placeholder:font-[100] placeholder:text-[13px] !py-4 text-black font-[100] transform skew-x-12 focus:outline-none focus:border-none rounded-md w-full pl-8 "
                />
              </div>
              <div className="lg:w-[80%] xl:w-[600px] w-full flex item-center md:hidden justify-center xl:justify-start gap-2 mt-2 mb-5">
                <Image src={images.infoCircle} alt="" />
                  <p className="text-[#00000080] text-[12px] font-[100] leading-[16px]">
                    Waitlist members agree to receiving emails and updates.
                  </p>
              </div>
              <div
                className={`md:w-[140px] w-[120px] flex items-center justify-center !py-4 mt-2 md:mt-0 ${emailInput && emailRegex ? 'cursor-pointer' : 'cursor-not-allowed'} bg-[#2EB200] transform -skew-x-12 font-[200] rounded-md `}
                onClick={() =>{ 
                  if(emailInput && emailRegex) return handleSubmit()
                }}
              >
                <span className="transform skew-x-12 md:text-[14px] text-white text-[12px] font-[200]">
                  {isSending ? 'Joining...' : 'Join Waitlist'}
                </span>
              </div>
            </div>

            {(emailInput && !emailRegex) && <div className="lg:w-[80%] xl:w-[600px] w-full md:flex item-center hidden justify-center xl:justify-start gap-2 mt-2">
              <p className="flex justify-start items-start text-red-400 text-start text-xs font-[100]">invalid email format</p>
            </div>}

            <div className="lg:w-[80%] xl:w-[600px] w-full md:flex item-center hidden justify-center xl:justify-start gap-2 mt-2">
              <Image src={images.infoCircle} alt="" />
                <p className="text-[#00000080] text-[12px] font-[100] leading-[16px]">
                  Waitlist members agree to receiving amazing emails and updates.
                </p>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="lg:pb-[48px] pb-[64px] flex justify-between items-center px-[5%] xl:px-0 xl:w-[1240px] flex-col lg:flex-row gap-8  max-w-[1440px] !mx-auto" id="WaitList">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              priority
              src={images?.genCapitaLogo}
              alt="logo"
              width={148}
              height={19}
            />
            <p className="mt-[10px] text-white font-[100] text-[13px]">
              Take Charge.
            </p>
          </div>

          <div className="flex flex-col lg:justify-end justify-center lg:items-end items-center ">
            <div className="flex lg:justify-end justify-center lg:items-end items-center gap-4 cursor-pointer">
            <Image
              priority
              src={images?.whatsapp}
              alt=""
              width={20}
              height={20}
              onClick={()=> window.open('https://whatsapp.com/channel/0029ValKZe1HwXbFg0zDPj2F')}
            />
            <Image priority src={images?.Insta} alt="" width={20} height={20} 
             onClick={()=> window.open('https://www.instagram.com/gencapita/')}
            />
            <Image priority src={images?.twitter} alt="" width={20} height={20} 
             onClick={()=> window.open('https://x.com/gencapita')}
            />
            </div>
            <p className="mt-[10px] text-white font-[100] text-[13px]">
              © Copyright Gen Capita {new Date().getFullYear()}.
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
        <EmailListSuccess
          setOpen={setIsEmailListModalOpen}
        />
      </Modals>
    </main>
  );
}
