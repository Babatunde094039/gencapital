import { Form, Input } from "antd";
import Image from "next/image";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Sign from "@/assets/icons/sign.svg";
import { images } from "@/theme";
import { CustomInputProps } from "@/utils/interfaces";
import { formValidationMsgs } from "@/utils/inputFieldsError";
import { OpenSauceOne } from "@/assets/font";

const CustomTextArea = ({
  handleOnBlur,
  isError,
  errorMsg,
  label,
  placeholder,
  type,
  isOtp,
  isPercentage,
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
}: CustomInputProps) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [doesEmailContain, setdoesEmailContain] = useState<null | boolean>(
    null
  );

  const onFocus = () => {
    setFocused(true);
    if (onInputFocus) {
      onInputFocus();
    }
  };
  const onBlur = () => {
    if (
      type === "email" &&
      !doesEmailContain &&
      inputValue.length > 0 &&
      setIsError &&
      setErrorMsg
    ) {
      setIsError(true);
      setErrorMsg(formValidationMsgs("InvalidEmailFormat") as string);
    }
    if (inputValue.length === 0 && setIsError && setErrorMsg) {
      setIsError(true);
      setErrorMsg(formValidationMsgs("requiredField") as string);
    }
    if (doesEmailContain && setIsError) {
      setIsError(false);
    }

    if (isFullName && setIsError && setErrorMsg) {
      let result = /\s/.test(inputValue);

      setIsError(!result);
      if (inputValue.length < 1) {
        setErrorMsg(formValidationMsgs("requiredField") as string);
      } else setErrorMsg(formValidationMsgs("InvalidFullnameFormat") as string);
    }

    if (isDropdown && inputValue.length < 14) {
      setFocused(true);
      if (setErrorMsg && setIsError) {
        setIsError(true);
        setErrorMsg(formValidationMsgs("requiredField") as string);
      }

      return;
    }

    setFocused(false);
    handleOnBlur();
  };

  //@anybody this is the handle chnage that tests each codition
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    let result = /\s/.test(inputValue);

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
      const formattedOtp = value.replace(/\D/g, "");

      return setInputValue("");
    }
    if (type === "email") {
      setdoesEmailContain(/[@]/.test(value));
      return setInputValue(value);
    }

    if (isPercentage && setPercValue) {
      const newvalue = value.replace(/\D/g, "");

      setPercValue(newvalue);
      return setInputValue(newvalue);
    }

    // setdoesEmailContain(/[@]/.test(value));
    return setInputValue(value);
  };

  useEffect(() => {
    //@anybody this statement checks if the input value contains '@'

    if (doesEmailContain && setIsError && setErrorMsg) {
      setIsError(false);
      setErrorMsg("");
    }

    if (isDropdown && inputValue.length >= 14 && setIsError) {
      setIsError(false);
    }
    if (isOtp && inputValue.length >= 9) {
      setIsOtpValid(true);
    } else setIsOtpValid(false);

    return;
  }, [inputValue]);

  useEffect(() => {
    if (autocompleteValue) {
      setInputValue(autocompleteValue as string);
    } else {
      setInputValue("");
    }
  }, [autocompleteValue]);

  return (
    <Form.Item
      name={fieldName}
      className={`${OpenSauceOne.className} !mb-0 ease-in-out duration-300`}
    >
      <div
        className={`${
          isError
            ? "border-[#EC4040] border"
            : "hhover:border-[#D0D5DD] border-[#D0D5DD] border"
        }  w-[100%] !rounded-[8px] !bg-[white] shadow   ${OpenSauceOne.className}`}
      >
        <div className="relative ">
          <label
            className={`${
              focused || inputValue.length >= 1
                ? "top-[12px] text-[#667085] text-[14px] !bg-white rounded-t-[8px] "
                : "top-[25px] text-[#667085] text-[15px]"
            } ease-in-out duration-300 font-[100]  leading-[16.80px] z-10  !w-full   text-[#667085] absolute pl-[16px] pt-2 transform -translate-y-1/2`}
          >
            {label}
          </label>

          <Input.TextArea
            placeholder={`${
              focused && inputValue.length < 1 ? placeholder : ""
            }`}
            className="!bg-transparent !outline-none text-[#000000CC] !mt-1 !text-[14px] font-normal leading-[19.20px]  w-full  !rounded-[16px]  !border-0
             "
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(e) => handleChange(e)}
            value={inputValue}
            disabled={disabled}
            rows={3}
          />
        </div>
      </div>
      {isError && (
        <p className="text-[#EC4040] font-normal text-[14px] leading-[16.8px] pt-2 ease-in-out duration-300">
          {errorMsg}
        </p>
      )}
    </Form.Item>
    // </div>
  );
};

export default CustomTextArea;
