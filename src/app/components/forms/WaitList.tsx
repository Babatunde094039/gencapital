import { images } from "@/theme";
import { Form } from "antd";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import CustomInput from "../customInput";
import CustomTextArea from "../customTextArea";

interface props {
  steps: number;
  setSteps: Dispatch<SetStateAction<number>>
  setOpen : Dispatch<SetStateAction<boolean>>
}
const WaitList = ({
  steps,setSteps,setOpen
}:props ) => {
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [isErrorCompany, setIsErrorCompany] = useState(false);
  const [errorMsgCompany, setErrorMsgCompany] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [errorMsgEmail, setErrorMsgEmail] = useState("");
  const [isErrorPhone, setIsErrorPhone] = useState(false);
  const [errorMsgPhone, setErrorMsgPhone] = useState("");
  
  return (
    <div className="lg:px-6 px-5 pt-6 pb-10">
      {steps === 1 && (
        <div>
          <div className="flex justify-between items-center">
            <Image src={images?.flag} alt={""} />

            <Image src={images?.close} alt={""} className="cursor-pointer" onClick={()=>setOpen(false)} />
          </div>

          <div className="mb-5 mt-1">
            <p className="text-start text-[32px] text-[#101828] font-[400]">
              Contact Sales
            </p>
            <p className="text-start text-[14px] text-[#475467] font-[200]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <Form
            form={form}
            layout="vertical"
            className={` flex flex-col gap-4  `}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <CustomInput
                fieldName={"Fullname"}
                handleOnBlur={() => {}}
                isError={isError}
                errorMsg={errorMsg}
                setErrorMsg={setErrorMsg}
                setIsError={setIsError}
                label={"Full name"}
                placeholder={"Full name"}
                type="text"
                disabled={false}
              />

              <CustomInput
                fieldName={"Company"}
                handleOnBlur={() => {}}
                isError={isErrorCompany}
                errorMsg={errorMsgCompany}
                setErrorMsg={setErrorMsgCompany}
                setIsError={setIsErrorCompany}
                label={"Company"}
                placeholder={"Company"}
                type="text"
                disabled={false}
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
              <CustomInput
                fieldName={"Email address"}
                handleOnBlur={() => {}}
                isError={isErrorEmail}
                errorMsg={errorMsgEmail}
                setErrorMsg={setErrorMsgEmail}
                setIsError={setIsErrorEmail}
                label={"Email address"}
                placeholder={"Email address"}
                type="email"
                disabled={false}
              />

              <CustomInput
                fieldName={"Phone Number"}
                handleOnBlur={() => {}}
                isError={isErrorPhone}
                errorMsg={errorMsgPhone}
                setErrorMsg={setErrorMsgPhone}
                setIsError={setIsErrorPhone}
                label={"Phone Number"}
                placeholder={"Phone Number"}
                type="number"
                disabled={false}
              />
            </div>

            <CustomTextArea
              fieldName={"Message"}
              handleOnBlur={() => {}}
              label={"Message"}
              placeholder={""}
              type="text"
            />

            <div className="flex justify-start items-center gap-1 ">
              <Image src={images.infoCircle} alt="" />
              <p className="text-[#00000080] text-[12px] font-[400] leading-[16px]">
                Waitlist members agree to receiving amazing emails and updates.
              </p>
            </div>
          </Form>

          <div className="pt-10 flex justify-center items-center" onClick={()=>setSteps(2)}>
            <div className="md:w-[140px] w-[100px] flex items-center justify-center md:h-[50px] h-[40px] bg-[#2EB200] transform -skew-x-12 font-[200] rounded-md cursor-pointer">
              <span className="transform skew-x-12 md:text-[15px] text-white text-[12px] font-[500]">
                Submit
              </span>
            </div>
          </div>
        </div>
      )}

      {steps === 2 && (
        <div className="  flex justify-center items-center flex-col  w-full">
          <Image
            src={images?.successfulWaitList}
            alt=""
            width={352}
            height={208}
            className="rounded-[8px] w-full "
          />
          <div className="flex justify-center items-center flex-col mt-6">
            <p className="text-start text-[18px] text-[#101828] font-[600]">
              You're on the List!
            </p>
            <p className="text-start text-[14px] text-[#475467] font-[400] mt-1">
              Thank you for joining.
            </p>
          </div>

          <div
              className="md:w-[140px] w-[100px] mt-[16px] flex items-center justify-center md:h-[50px] h-[40px] bg-[#2EB200] transform -skew-x-12 font-[200] rounded-md cursor-pointer"
              onClick={() => {
                setOpen(false)
                setSteps(1)
              }}
            >
              <span className="transform skew-x-12 md:text-[15px] text-white text-[12px] font-[500]">
                Okay
              </span>
            </div>
        </div>
      )}
    </div>
  );
};

export default WaitList;
