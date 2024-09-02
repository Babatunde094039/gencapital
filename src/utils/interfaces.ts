import { SetStateAction } from "react";

export   interface CustomInputProps {
    handleOnBlur: () => void;
    onInputFocus?: () => void;
    isError?: boolean;
    errorMsg?: string;
    label: string;
    placeholder: string | null;
    type: string;
    isOtp?: boolean;
    isPercentage?: boolean;
    wyrrTag?:boolean;
    interacId?: boolean
    isAcctNum?: boolean;
    setIsError?: React.Dispatch<React.SetStateAction<boolean>>;
    setErrorMsg?: React.Dispatch<React.SetStateAction<string>>;
    autocompleteValue?: string|any;
    fieldName: string;
    isDropdown?: boolean;
    isFullName?: boolean;
    min?:number;
    disabled?:boolean;
    wyrrTagIcon?:string
    onChange?:React.ChangeEventHandler<HTMLInputElement> | undefined;
    maxLength?: number;
    setPercValue?:React.Dispatch<React.SetStateAction<string|any>>;
    setAcctNum?: React.Dispatch<React.SetStateAction<string|any>>;
    setInputDateValue?:React.Dispatch<React.SetStateAction<string|any>>;
    isAmountRange? :boolean | undefined
  }
  
 export  interface customPassword {
    isSignIn: boolean;
    fieldName: string;
    disabled?:boolean;
    label: string;
    setIsInputFocused?: React.Dispatch<React.SetStateAction<boolean>>;
    isLengthValid: boolean | null; 
    setIsLengthValid: React.Dispatch<React.SetStateAction<boolean | null>>;
    isLowercaseValid: boolean | null;
    setIsLowercaseValid:React.Dispatch<React.SetStateAction<boolean | null>> ;
    isUppercaseValid: boolean | null;
    setIsUppercaseValid: React.Dispatch<React.SetStateAction<boolean | null>>;
    isNumberValid: boolean | null;
    setIsNumberValid:React.Dispatch<React.SetStateAction<boolean | null>>;
    isSymbolValid: boolean | null;
    setIsSymbolValid: React.Dispatch<React.SetStateAction<boolean | null>>;
    setIsError?: React.Dispatch<React.SetStateAction<boolean>>;
    setErrorMsg?: React.Dispatch<React.SetStateAction<string>>;
    isError?: boolean;
    errorMsg?: string;
    handleOnBlur?: () => void;
  }

  export type InputErrorType = 'invalidPhoneNumber' |'requiredField' | 'InvalidEmailFormat' | 'alreadyExists' |'InvalidFullnameFormat'|'InvalidEmailForPassword'|'passRequirementError'