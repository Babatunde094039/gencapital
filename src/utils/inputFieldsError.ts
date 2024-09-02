import { InputErrorType } from "./interfaces";

export const formValidationMsgs = (type: InputErrorType) => {
  switch (type) {
    case "requiredField":
      return "This field is required";
    case "InvalidEmailFormat":
      return "You’ve entered an invalid email format.";
    case "InvalidFullnameFormat":
      return "Full name must Last name : Jon Doe";
    case "alreadyExists":
      return "This email is already in use";
    case 'InvalidEmailForPassword':
      return "This email is not associated to any account.";
      case 'passRequirementError':
        return "Password does not meet the requirement.";
        case 'invalidPhoneNumber':
        return "Enter a valid phone number .";
    default:''
    // if (type >= 400 && type < 500) {
    //   return "Client error. Please try again later.";
    // } else if (type >= 500) {
    //   return "Server error. Please try again later.";
    // } else {
    //   return "Unknown error occurred.";
    // }
  }
};
