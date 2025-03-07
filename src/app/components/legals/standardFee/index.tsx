import React from "react";
import LegalHeader from "..";
import Link from "next/link";

const Standard = () => {
  return (
    <div className="pb-[130px]">
      <LegalHeader title="Standard Fees Schedule" />{" "}
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Stocks & ETFs
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          US-Listed Equities and ETFs: $0. Gen offers Zero-Commission trading to
          all clients.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Funding
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          Deposits: $0 <br />
          Withdrawals: $0.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Third-Party Fees
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          Third-party fees may include custodian, brokerage, mutual funds, and
          other transaction fees. You should check the fees charged before you
          place a buy or sell order.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Portfolio Management Fees
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          We work with third-party advertising and analytics providers to
          understand your online activities and present you with targeted
          advertisements. For instance, we use Google Analytics, and you can
          learn more about Google’s data processing practices at “How Google
          uses information from sites or apps that use our services”:{" "}
          <Link
            href={"http://www.google.com/policies/privacy/partners/"}
            className="text-[#2EB200]"
          >
            http://www.google.com/policies/privacy/partners/
          </Link>{" "}
          . These providers gather data about your interactions with our
          Services and other websites over time through cookies, device
          identifiers, and other tracking technologies. Information collected
          includes details like your IP address, browser type, mobile network
          information, pages visited, time spent, links clicked, and conversion
          data.
        </p>

        <div className="my-10 dave">
          <table className="">
            <thead className="">
              <tr>
                <th>S/N</th>
                <th>Fee</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" ">
                <td>1.</td>
                <td>
                  Account Balances of $3,000.00 <br /> or more
                </td>
                <td>1% per annum</td>
              </tr>
              <tr className=" ">
                <td>2.</td>
                <td>
                  Account Balances of $3,000.00 <br /> or more
                </td>
                <td>$1.00 per month</td>
              </tr>
            </tbody>
          </table>
        </div>



        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
        Gen will charge $1.00 per month in advance for accounts below $3,000.00. Accounts with $3,000.000 or more will be charged 1% per annum, divided equally into 12 monthly bills, and charged in arrears. Gen uses the daily average value of the account as of the last business day of the month to determine the value of the asset under management.
        </p>


        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
        Corporate entities and institutions will be charged a flat annual fee of 1% of the asset under management. Fees may be negotiable and, therefore, may vary by client.  The final fee schedule will be included in the client’s advisory agreement.
        </p>
      </div>
    </div>
  );
};

export default Standard;
