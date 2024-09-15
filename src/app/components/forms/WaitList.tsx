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
  const [isSending, setIsSending] =  useState(false)

  const handleSubmit = async ()=> {
    setIsSending(true)
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSexBXfs2UM-_zjiIjSIVUt9W1a7t6IzRjqyVp301gxOolOr5Q/formResponse';
    try{
      let data = new FormData();
      data.append('entry.1684042362', values.fullname);
      data.append('entry.1451322571', values.company);
      data.append('entry.1368031414', values.emailaddress);
      data.append('entry.1752182325', values.phoneNumber);
      data.append('entry.315929182', values.message);
  
      const response = await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });
  
      if (response) {
        setSteps(2)
        setIsSending(false)
      } else {
        setIsSending(false)
        // console.error('Form submission failed');
      }
    }catch{
      setIsSending(false)
        // console.error('Form submission failed');
    }
  }

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
            Send us a message.
            </p>
          </div>

          <Form
            form={form}
            layout="vertical"
            className={` flex flex-col gap-4  `}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <CustomInput
                fieldName={"fullname"}
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
                fieldName={"company"}
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
                fieldName={"emailaddress"}
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
                fieldName={"phoneNumber"}
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
              fieldName={"message"}
              handleOnBlur={() => {}}
              label={"Message"}
              placeholder={""}
              type="text"
            />

            <div className="flex justify-start items-center gap-1 ">
              <Image src={images.infoCircle} alt="" />
              <p className="text-[#00000080] text-[12px] font-[400] leading-[16px]">
                Waitlist members agree to receiving emails and updates.
              </p>
            </div>
          </Form>

          <div className="pt-10 flex justify-center items-center">
            <div className="md:w-[140px] w-[100px] flex items-center justify-center md:h-[50px] h-[40px] bg-[#2EB200] transform -skew-x-12 font-[200] rounded-md cursor-pointer"
              onClick={()=> !isSending && handleSubmit()}
            >
              <span className="transform skew-x-12 md:text-[15px] text-white text-[12px] font-[500]">
                {isSending ? 'Sending...' : 'Submit'}
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
              Message Sent!
            </p>
            <p className="text-start text-[14px] text-[#475467] font-[400] mt-1">
               We will be in touch.
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
