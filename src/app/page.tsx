"use client";
import { images } from "@/theme";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import test from "@/assets/stocksSection.svg";
import CollapseAccountDetails from "./components/collapse";
import ParentCollapse from "./components/collapse/parentCollapse";
import {
  Input,
  InputNumberProps,
  Modal,
  Slider,
  SliderSingleProps,
} from "antd";
import { useState } from "react";
import ChartComponent from "./components/chart";
import Modals from "./components/modal";
import WaitList from "./components/forms/WaitList";
import Link from "next/link";

export default function Home() {
  const [inputValue, setInputValue] = useState(150);
  const [isWaitListModalOpen, setIsWaitListModalOpen] = useState(false);
  const [steps, setSteps] = useState(1);

  const onChange: InputNumberProps["onChange"] = (newValue) => {
    setInputValue(newValue as number);
  };

  const formatter: NonNullable<SliderSingleProps["tooltip"]>["formatter"] = (
    value
  ) => `$${value}`;

  return (
    <main className="bg-white">
      <div className="h-[800px] w-full  bg-custom-gradient relative">
        <div className="flex justify-between items-center bg-[#061A01] w-full md:px-[10%] px-[7%] py-5">
          <Image
            priority
            src={images.genCapitaLogo}
            alt="logo"
            className="md:w-[180px] w-[120px]"
          />
          <Link href={'#WaitList'} className="md:w-[140px] w-[100px] flex items-center justify-center md:h-[50px] h-[40px] bg-[#2EB200] transform -skew-x-12 font-[200] rounded-md">
            <span className="transform skew-x-12 md:text-[15px] text-[12px]">
              Join the Waitlist{" "}
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center pt-14 px-[5%] md:px-0">
          <p className="2xl:text-[86px] xl:text-[68px] md:text-[68px] text-[45px] text-center !text-[#FFFFFF]">
            Intelligent Investing
          </p>
          <p className="2xl:text-[20px] md:text-[18px] text-[17px] md:w-[48%] xl:w-[42%] 2xl:w-[29%] w-full text-center font-[100] mt-4 !text-[#FFFFFF]">
            GEN CAPITA empowers investors at every experience level to build
            wealth through global securities.
          </p>
          <Link href={'#WaitList'} className="w-[140px] mt-8 flex items-center justify-center h-[50px] bg-[#2EB200] transform -skew-x-12 font-[200] rounded-md">
            <span className="transform skew-x-12 text-[15px] !text-white">
              Join the Waitlist{" "}
            </span>
          </Link>
        </div>

        <Image
          priority
          src={images.iPhone}
          alt="iphone"
          className="absolute -bottom-[350px] xl:left-[39%] md:left-[34%] left-[10%] 2xl:left-[41%] 3xl:left-[43%]  4xl:left-[45%] right-0"
        />
      </div>

      <div className="bg-white lg:gap-8 md:mt-[420px] mt-[430px] px-[5%] pb-[50px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-between items-center md:gap-y-[80px] gap-y-[32px] ">
        <div className="flex md:justify-start items-center  gap-6 md:flex-row flex-col justify-center text-center md:text-start ">
          <Image priority src={images?.buysell} alt="" width={90} height={90} className='2xl:w-[80px] w-[60px]'/>
          <p className="2xl:text-[18px] text-[14px] text-[#162930] font-[100] leading-[26px] tracking-[-0.2px]  2xl:pr-10">
            Buy/Sell the world’s most sought assets
          </p>
        </div>
        <div className="flex md:justify-start items-center  gap-6 md:flex-row flex-col justify-center text-center md:text-start  ">
          <Image
            priority
            src={images?.portfolio}
            alt=""
            width={90}
            height={90}
            className='2xl:w-[80px] w-[60px]'
          />
          <p className="2xl:text-[18px] text-[14px] text-[#162930] font-[100] leading-[26px] tracking-[-0.2px]  2xl:pr-10">
            Portfolio management with the power of AI
          </p>
        </div>
        <div className="flex md:justify-start items-center  gap-6 md:flex-row flex-col justify-center text-center md:text-start  ">
          <Image priority src={images?.trade} alt="" width={90} height={90} className='2xl:w-[80px] w-[60px]'/>
          <p className="2xl:text-[18px] text-[14px] text-[#162930] font-[100] leading-[26px] tracking-[-0.2px]  2xl:pr-10">
            Trade like a pro with advanced tools
          </p>
        </div>
        <div className="flex md:justify-start items-center  gap-6 md:flex-row flex-col justify-center text-center md:text-start  ">
          <Image priority src={images?.money} alt="" width={90} height={90} className='2xl:w-[80px] w-[60px]'/>
          <p className="2xl:text-[18px] text-[14px] text-[#162930]  font-[100] leading-[26px] tracking-[-0.2px] 2xl:pr-10">
            Enjoy seamless money management
          </p>
        </div>{" "}
        <div className="flex md:justify-start items-center gap-6 md:flex-row flex-col justify-center text-center md:text-start  ">
          <Image
            priority
            src={images?.security}
            alt=""
            width={90}
            height={90}
            className='2xl:w-[80px] w-[60px]'
          />
          <p className="2xl:text-[18px] text-[14px] text-[#162930] font-[100] leading-[26px] tracking-[-0.2px]  2xl:pr-10">
            {" "}
            Count on robust security to protect your investments
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[#000000B2] font-[100] text-[14px]">
            Do you have questions?
          </span>
          <p className="flex items-center gap-2 font-[600] 2xl:text-[14px] text-[12px] text-[#2EB200] cursor-pointer">
            Contact us <FaArrowRight />
          </p>
        </div>
      </div>

      <div className="px-[5%] lg:pt-[66px] pt-[64px] bg-white pb-[60px]  flex flex-col gap-10 ">
        <div
          className={` !bg-[#071A00]  2xl:py-[100px] lg:py-[50px] lg:px-[30px] 2xl:px-[60px] md:px-8 px-4 py-[40px] rounded-[16px] relative  overflow-hidden`}
        >
          <div className="xl:w-[50%] lg:w-[45%] lg:pb-0 md:pb-[65%] pb-[230px]">
            <div className="flex justify-start items-start flex-col gap-4 pb-[39px] border-b border-[#3CE500] pr-10 ">
              <p className="text-white lg:text-[36px] text-[28px] font-bold leading-[38px] tracking-[-1.38px] ">
                Trading Global <br /> Securities
              </p>
              <p className="text-white lg:text-[16px] text-[14px] font-[100] leading-[31px] tracking-[-0.24px] ">
                Future-forward platform for trading US and global stocks,
                options, bonds, mutual funds, commodities, and alternative
                assets.
              </p>
            </div>

            <div className="pt-8 border-t border-[#3CE500] flex flex-col justify-start items-start gap-4">
              <div className="flex justify-start items-center gap-[13px] ">
                <Image
                  priority
                  src={images?.listIcon}
                  alt=""
                  width={13}
                  height={13}
                />
                <p className="2xl:text-[18px] lg:text-[16px] text-[14px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
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
                <p className="2xl:text-[18px] lg:text-[16px] text-[14px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
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
                <p className="2xl:text-[18px] lg:text-[16px] text-[14px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
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
                <p className="2xl:text-[18px] lg:text-[16px] text-[14px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
                  Millisecond Latency
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 lg:w-[800px] lg:h-[600px]">
            <Image
              priority
              src={test}
              alt=""
              width={810}
              height={654}
              className="w-full h-full !object-contain"
            />
          </div>
        </div>

        <div className="bg-[#071A00] rounded-2xl 2xl:py-[100px] lg:py-[50px] lg:px-[30px] 2xl:px-[60px] md:px-8 px-4 py-[40px] flex justify-between lg:flex-row gap-8 lg:gap-0 flex-col items-center">
          <div className="lg:w-[50%]">
            <div className="flex justify-start items-start flex-col gap-4 pb-[39px] border-b border-[#3CE500] pr-10 ">
              <p className="text-white lg:text-[36px] text-[28px] font-bold leading-[38px] tracking-[-1.38px] ">
                Moving Money
              </p>
              <p className="text-white lg:text-[16px] text-[14px] font-[100] leading-[31px] tracking-[-0.24px] ">
                Fund your trades and cash out effortlessly from anywhere in the
                world, with foreign currency solutions that hedge your risks.
              </p>
            </div>

            <div className="pt-8 border-t border-[#3CE500] flex flex-col justify-start items-start gap-4">
              <div className="flex justify-start items-center gap-[13px] ">
                <Image
                  priority
                  src={images?.listIcon}
                  alt=""
                  width={13}
                  height={13}
                />
                <p className="2xl:text-[18px] lg:text-[16px] text-[14px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
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
                <p className="2xl:text-[18px] lg:text-[16px] text-[14px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
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
                <p className="2xl:text-[18px] lg:text-[16px] text-[14px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
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
                <p className="2xl:text-[18px] lg:text-[16px] text-[14px] font-[200] leading-[26px] tracking-[-0.2px] !text-white">
                  Settlement Support
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <Image
              priority
              src={images?.paperMoney}
              alt=""
              width={688}
              height={253}
              className="!object-cover"
            />
          </div>
        </div>

        <div className="bg-[#071A00] rounded-2xl 2xl:py-[100px] lg:py-[50px] lg:px-[30px] 2xl:px-[60px] md:px-8 px-4 py-[40px] flex justify-between lg:flex-row flex-col gap-8 lg:gap-0 items-center ">
          <div className="lg:w-[50%]">
            <div className="flex justify-start items-start flex-col gap-4 pb-[39px] border-b border-[#3CE500] pr-10 ">
              <p className="text-white lg:text-[36px] text-[28px] font-bold leading-[38px] tracking-[-1.38px] ">
                The Power of AI
              </p>
              <p className="text-white lg:text-[16px] text-[14px] font-[100] leading-[31px] tracking-[-0.24px] ">
                Harness AI to analyze data, predict market trends, and automate
                trading decisions for optimized returns and minimized risks.
              </p>
            </div>

            <div className="pt-8 border-t border-[#3CE500] flex flex-col justify-start items-start gap-4">
              <div className="flex justify-start items-center gap-[13px] ">
                <Image
                  priority
                  src={images?.listIcon}
                  alt=""
                  width={13}
                  height={13}
                />
                <p className="2xl:text-[18px] lg:text-[16px] text-[14px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
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
                <p className="2xl:text-[18px] lg:text-[16px] text-[14px] font-[200] leading-[26px] tracking-[-0.2px] !text-white">
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
                <p className="2xl:text-[18px] lg:text-[16px] text-[14px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
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
                <p className="2xl:text-[18px] lg:text-[16px] text-[14px] font-[200]  leading-[26px] tracking-[-0.2px] !text-white">
                  Intelligent Security Solutions
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[50]">
            <Image
              priority
              src={images?.CircleImage}
              alt=""
              width={420}
              height={420}
            />
          </div>
        </div>
      </div>

      <div className="lg:py-[50px] py-[64px] pb-[40px] px-[5%] bg-[#F9FAFB]">
        <p className="lg:text-[38px] text-[28px] font-bold text-[#111216] text-center mb-[40px] lg:mb-[70px]">
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
              max={2000}
              onChange={onChange}
              defaultValue={150}
              value={inputValue}
              step={10}
              className="!w-full"
              tooltip={{ formatter }}
            />
            <div className="flex justify-between items-center w-full">
              <p className="text-[#00000099] lg:text-[16px] text-[14px] font-[200]  flex justify-start items-center text-start gap-[7px] ">
                Amount: <span className="text-black font-[600] ">$100</span>
              </p>
              <p className="text-[#00000099] lg:text-[16px] text-[14px] font-[200]  flex justify-start items-center text-start gap-[7px] ">
                Quantity :<span className="text-black font-[600] ">5.12</span>
              </p>
            </div>
          </div>
        </div>

        <ChartComponent />
        <div className="mt-6 flex justify-center items-center gap-[12px] flex-col">
          <p className="text-[#00000099] lg:text-[16px] text-[14px] font-[200] text-center">
            You will have
          </p>
          <div className="justify-center items-center flex gap-[6px]  ">
            <p className="text-[#000000] text-[32px] font-[600] ">$536.11</p>
            <p className="text-[#2EB200] lg:text-[16px] text-[14px] font-[600] text-end ">
              +436.11%
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white lg:py-[64px] py-[42px] px-[5%] ">
        <div className="flex flex-col  gap-2 lg:mb-[64px] mb-[32px]">
          <p className="lg:text-[32px] text-[28px] font-[400] tracking-[-0.82px] text-[#101828]">
            Also Coming Soon
          </p>
          <p className="2xl:text-[18px] lg:text-[16px] text-[14px] font-[100] leading-[26px] tracking-[-0.2px] text-[#475467]">
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

      <div className="bg-[#F9FAFB] lg:py-[86px] py-[64px] px-[5%] flex justify-between flex-col-reverse lg:flex-row gap-6 lg:gap-[64px] w-full">
        <div className="lg:w-[50%]">
          <Image
            priority
            src={images.womenLaughing}
            alt=""
            width={76}
            height={92}
            className="w-full h-[500px] object-cover"
          />
        </div>

        <div className="  lg:w-[50%] w-full ">
          <p className="text-[#101828] lg:text-[30px] text-[22px] font-[400] 2xl:leading-[45px] md:leading-[38px] leading-[28px]"> 
            There’s a brokerage account tailored to everyone
          </p>

          <ParentCollapse />
        </div>
      </div>

      <div className="bg-[white] pt-[80px] ">
        <div className="flex justify-center items-center mb-[64px] px-[5%]">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-[#101828] lg:text-[32px] text-[28px]  font-[600]">
              Enterprise Solutions
            </p>

            <p className="text-[#475467] lg:text-[16px] text-[14px] leading-[28px]  font-[100]  lg:w-[70%] text-center">
              Brokers, asset managers, and fintechs can leverage GEN CAPITA's
              power to provide clients access to global securities and
              investment tools.
            </p>

            <p className="text-[#344054] lg:text-[14px] text-[13px] mt-2 font-[400] border border-[#1CCD15] px-10 py-3 rounded-[8px] cursor-pointer">
              Contact Sales
            </p>
          </div>
        </div>

        <div className="px-[5%]">
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

      <div className="bg-black py-[100px] px-[5%]">
        <div className="flex justify-around items-center md:px-[6%] xl:px-[10%] 2xl:px-[12%] flex-col lg:flex-row lg:items-center gap-12 lg:gap-0">
          <div className="w-full flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <p className="lg:text-[37px] 2xl:text-[44px] text-[28px] font-semibold   w-full lg:leading-[45px] 2xl:leading-[55px] text-white text-center lg:text-start">
              Join the GEN CAPITA <br /> Channel
            </p>
            <div className="px-[15px] py-[20px] flex items-center justify-center md:h-[50px] h-[38px] bg-[white] cursor-pointer transform -skew-x-12 font-[200] rounded-md mt-8">
              <span className="transform skew-x-12 md:text-[14px] text-[12px] text-black">
                Join the Channel
              </span>
            </div>
          </div>


          <Image
            priority
            src={images.phoneFrame}
            alt=""
            width={380}
            height={500}
          />
        </div>

        <div className="lg:my-[140px] my-[64px] lg:p-[64px] py-[56px] px-[16px]  bg-white rounded-[24px] flex flex-col justify-center items-center ">
          <div className="2xl:!w-[60%] lg:!w-[70%] !w-full  flex justify-center items-center flex-col gap-4 mb-5">
            <p className="text-[#161616] text-center lg:text-[32px] text-[25px] font-bold lg:leading-[40px]  ">
              GEN CAPITA is the next frontier of investment technology, helping
              you unlock financial value.
            </p>
            <p className="text-[#161616] text-center lg:text-[18px] text-[16px] font-[100] leading-[31px]  ">
              Sign up now and stay ahead of the curve.
            </p>
          </div>

          <div className="flex md:flex-row flex-col justify-center items-center gap-1  w-full">
            <input
              placeholder="Enter email address"
              className="bg-[#F5F5F5] placeholder:font-[100] placeholder:text-[13px] !py-4 text-black focus:outline-none focus:border-none  transform -skew-x-12 rounded-md lg:w-[40%] w-full pl-8 "
            />
            <div
              className="md:w-[140px] w-[120px] flex items-center justify-center  !py-4 mt-2 md:mt-0 bg-[#2EB200] transform -skew-x-12 font-[200] rounded-md cursor-pointer"
              onClick={() => setIsWaitListModalOpen(true)}
            >
              <span className="transform skew-x-12 md:text-[14px] text-white text-[12px] font-[200]">
                Join Waitlist
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black lg:pb-[48px] pb-[64px] flex justify-between items-center px-[5%] flex-col lg:flex-row gap-8" id="WaitList">
        <div>
          <Image
            priority
            src={images?.genCapitaLogo}
            alt="logo"
            width={148}
            height={19}
          />
          <p className="mt-[10px] text-white font-[100] text-[14px]">
            Take Charge.
          </p>
        </div>

        <div className="flex justify-end items-end gap-6 cursor-pointer">
          <Image
            priority
            src={images?.faceBook}
            alt=""
            width={20}
            height={20}
          />
          <Image
            priority
            src={images?.whatsapp}
            alt=""
            width={20}
            height={20}
          />
          <Image priority src={images?.Insta} alt="" width={20} height={20} />
          <Image priority src={images?.twitter} alt="" width={20} height={20} />
          <Image
            priority
            src={images?.linkedIn}
            alt=""
            width={20}
            height={20}
          />
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
    </main>
  );
}