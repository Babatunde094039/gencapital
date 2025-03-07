import React from "react";
import LegalHeader from "..";
import Image from "next/image";
import { images } from "@/theme";
import { downloadFile } from "@/helpers";

const fileList = [
  {
    name: "Use and Risk",
    filePath: "https://files.alpaca.markets/disclosures/library/UseAndRisk.pdf",
  },
  {
    name: "Terms and Conditions",
    filePath:
      "https://files.alpaca.markets/disclosures/library/TermsAndConditions.pdf",
  },
  {
    name: "Privacy Notice",
    filePath:
      "https://files.alpaca.markets/disclosures/library/PrivacyNotice.pdf",
  },
  {
    name: "PFOF",
    filePath: "https://files.alpaca.markets/disclosures/library/PFOF.pdf",
  },
  {
    name: "Margin Disclosure",
    filePath:
      "https://files.alpaca.markets/disclosures/library/MarginDiscStmt.pdf",
  },
  {
    name: "Statement",
    filePath:
      "https://files.alpaca.markets/disclosures/library/MarginDiscStmt.pdf",
  },

  {
    name: "Extended Hours Trading Risk",
    filePath: "https://files.alpaca.markets/disclosures/library/ExtHrsRisk.pdf",
  },
  {
    name: "Business Continuity Plan Summary",
    filePath: "https://files.alpaca.markets/disclosures/library/BCPSummary.pdf",
  },

  {
    name: "Form CRS",
    filePath: "https://files.alpaca.markets/disclosures/library/FormCRS.pdf",
  },
];
const Alpaca = () => {
  return (
    <div className="pb-[130px]">
      <LegalHeader title="Alpaca Fees Schedule" />{" "}
      <div className="flex  flex-col gap-10 mt-10">
        {fileList.map((fileDetails, index) => (
          <div className="flex  items-center justify-between " key={index}>
            <p className="text-[16px] lg:text-[20px] font-[400] text-[#383D41] leading-[25px]   h-full">
              {fileDetails.name}
            </p>
            <div
              onClick={() =>
                downloadFile(fileDetails.filePath, fileDetails?.name)
              }
              className="cursor-pointer8"
            >
              <Image src={images.downloadIcon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alpaca;
