import { Form, Input, Tooltip } from "antd";
import Image from "next/image";
import React, {
  ChangeEvent,
  Dispatch,
  useEffect,
  useMemo,
  useState,
} from "react";
import Sign from "@/assets/icons/sign.svg";
import { images } from "@/theme";
import { CustomInputProps } from "@/utils/interfaces";
import { formValidationMsgs } from "@/utils/inputFieldsError";
import { OpenSauceOne } from "@/assets/font";

const CustomInput = ({
  handleOnBlur,
  isError,
  errorMsg,
  label,
  placeholder,
  type,
  isOtp,
  isPercentage,
  wyrrTag,
  interacId,
  isAcctNum,
  setIsError,
  setErrorMsg,
  autocompleteValue,
  fieldName,
  isDropdown,
  onInputFocus,
  isFullName,
  min,
  disabled,
  onChange,
  maxLength,
  setPercValue,
  wyrrTagIcon,
  setInputDateValue,
  isAmountRange,
  setAcctNum,
}: CustomInputProps) => {
  const [focused, setFocused] = useState(false);

  const [inputValue, setInputValue] = useState<string>("");
  const [isOtpValid, setIsOtpValid] = useState(false);

  let regexForEmail =
    type === "email" &&
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      inputValue
    ) &&
    inputValue.length > 0;

  const onFocus = () => {
    setFocused(true);
    if (onInputFocus) {
      onInputFocus();
    }
  };
  const onBlur = () => {
    if (inputValue.length === 0 && setIsError && setErrorMsg && !isDropdown) {
      setIsError(true);
      setErrorMsg(formValidationMsgs("requiredField") as string);
    }

    if (inputValue.length > 0 && setIsError && setErrorMsg && !isDropdown) {
      setIsError(false);
      setErrorMsg("");
    }

    if (isFullName && setIsError && setErrorMsg) {
      let result = /\S+\s+[a-zA-Z]/.test(inputValue);
      setIsError(!result);
      if (inputValue.length < 1) {
        setErrorMsg(formValidationMsgs("requiredField") as string);
      } else setErrorMsg(formValidationMsgs("InvalidFullnameFormat") as string);
    }

    setFocused(false);
    handleOnBlur();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let result = /\S+\s+[a-zA-Z]/.test(inputValue);
    if (isOtp) {
      const formattedOtp = value
        .replace(/\D/g, "")
        .replace(/(\d{3})(?=\d)/g, "$1 - ");

      return setInputValue(formattedOtp);
    }
    if (isFullName && setIsError && setErrorMsg && result) {
      setIsError(!result);
      setErrorMsg("");
    }
    if (isDropdown) {
      // const formattedOtp = value.replace(/\D/g, "");
      // const formatPattern = /^(\d{2})?(\d{2})?(\d{4})?/;

      // const formattedValue = formattedOtp.replace(
      //   formatPattern,
      //   (match, p1, p2, p3) => {
      //     let formattedString = "";
      //     if (p1) formattedString += p1 + " - ";
      //     if (p2) formattedString += p2 + " - ";
      //     if (p3) formattedString += p3;

      //     if (formattedString.length === 14 && setInputDateValue) {
      //       setInputDateValue(formattedString);
      //     }
      //     return formattedString;
      //   }
      // );

      return;
    }

    if (isPercentage && setPercValue) {
      const newvalue = value.replace(/\D/g, "");

      setPercValue(newvalue);
      return setInputValue(newvalue);
    }
    if (isAmountRange) {
      const newvalue = value.replace(/\D/g, "");
      return setInputValue(newvalue);
    }
    if (isAcctNum && setAcctNum) {
      const newvalue = value.replace(/\D/g, "");

      setAcctNum(newvalue);
      return setInputValue(newvalue);
    }
    return setInputValue(value);
  };

  useEffect(() => {
    if (isOtp && inputValue.length >= 9) {
      setIsOtpValid(true);
      if (setIsError && setErrorMsg) {
        setIsError(false);
        setErrorMsg("");
      }
    } else setIsOtpValid(false);

    return;
  }, [inputValue]);

  useEffect(() => {
    if (autocompleteValue && isAmountRange) {
      let newValue = autocompleteValue.replace(/\D/g, "");
      return setInputValue(newValue);
    } else if (autocompleteValue) {
      return setInputValue(autocompleteValue);
    } else {
      return setInputValue("");
    }
  }, [autocompleteValue]);

  useEffect(() => {
    if (inputValue.length > 0 && setIsError && setErrorMsg && !isDropdown) {
      setIsError(false);
      setErrorMsg("");
    }
  }, [inputValue]);

  useEffect(() => {
    if (type == "email" && regexForEmail && setIsError && setErrorMsg) {
      setIsError(true);
      setErrorMsg(formValidationMsgs("InvalidEmailFormat") as string);
    }
  }, [inputValue]);

  const OnkeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isDropdown) {
      if (e.key === "Delete" || e.key === "Backspace") {
        return setInputValue("");
      }
    }
    return;
  };

  const text = (
    <span className="text-[#3A3A45]">
      We require this information as part of our Know Your Customer (KYC)
      procedures to ensure your security and prevent fraud.
    </span>
  );

  return (
    <div className=" !w-full">
      <Form.Item
        name={fieldName}
        className={`${OpenSauceOne.className} !mb-0 ease-in-out duration-300 !w-full `}
      >
        <div
          className={`${
            isError || regexForEmail
              ? "border-[#EC4040] border"
              : "border hover:border-[#D0D5DD] border-[#D0D5DD]"
          } !w-full !rounded-[8px] !bg-[white] shadow   ${
            OpenSauceOne.className
          }`}
        >
          <div className="relative">
            <label
              className={`${
                focused || inputValue.length >= 1
                  ? "top-[35%] text-[#667085] text-[14px]"
                  : "top-1/2 text-[#667085] text-[13px]"
              } ease-in-out duration-300 font-[100]  leading-[16.80px] text-[#667085] absolute ml-[16px]  transform -translate-y-1/2`}
            >
              {label}
            </label>
            {wyrrTag && focused && (
              <p className="text-[#BCBCC0] !text-[16px]  font-[normal] absolute pl-[16px] top-[41px] lg:top-[41px] transform -translate-y-1/2 ">
                {wyrrTagIcon ? wyrrTagIcon : "@"}
              </p>
            )}
            {wyrrTag && wyrrTagIcon && inputValue.length >= 1 && (
              <p className="text-[#BCBCC0] !text-[16px] font-[normal] absolute pl-[16px] top-[41px] lg:top-[41px] transform -translate-y-1/2 ">
                {wyrrTagIcon ? wyrrTagIcon : "@"}
              </p>
            )}
            <Input
              placeholder={`${
                focused && inputValue.length < 1 ? placeholder : ""
              }`}
              className={`!bg-transparent ${
                wyrrTag &&
                isAmountRange &&
                wyrrTagIcon &&
                wyrrTagIcon?.length > 1
                  ? "ml-[23px] "
                  : wyrrTag &&
                    isAmountRange &&
                    wyrrTagIcon &&
                    wyrrTagIcon?.length === 1
                  ? "ml-[10px] "
                  : wyrrTag && !isAmountRange && "ml-[16px] "
              }
               !outline-none text-[#000000CC] !text-[14px] font-normal leading-[19.20px]  w-full  !rounded-[16px]  !border-0 
            !h-[64px] lg:!h-[64px]`}
              type={type}
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyDown={(e) => OnkeyPress(e)}
              onKeyUp={(e) => OnkeyPress(e)}
              onChange={(e) => handleChange(e)}
             
              value={inputValue}
              min={min}
              disabled={disabled}
              maxLength={isOtp ? 9 : isDropdown ? 14 : maxLength}
              
            />
            {/*  */}
          </div>
        </div>
      </Form.Item>
      {isError ? (
        <p className="text-[#EC4040] font-normal text-[14px] leading-[16.8px] pt-2 ease-in-out duration-300">
          {errorMsg || (formValidationMsgs("InvalidEmailFormat") as string)}
        </p>
      ) : null}
      {regexForEmail && !isError ? (
        <p className="text-[#EC4040] font-normal text-[14px] leading-[16.8px]   ease-in-out duration-300">
          {formValidationMsgs("InvalidEmailFormat") as string}
        </p>
      ) : null}
    </div>
  );
};

export default CustomInput;
