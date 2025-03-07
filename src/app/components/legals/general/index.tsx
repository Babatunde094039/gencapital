import React from "react";
import LegalHeader from "..";
import Link from "next/link";

const General = () => {
  return (
    <div className="pb-[130px]">
      <LegalHeader title="General Disclosure" />{" "}
      <div className="mt-10">
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px]">
          The following General Disclosures are intended to provide transparency
          and help users understand the nature of this platform's information,
          products, and services. In this disclosure, “Gen” refers to Gen
          Financial Inc. and its wholly owned subsidiary, Gen Invest LLC (“Gen
          Invest”), including [GENCAPITA], its interactive website, mobile
          application, and related services, all accessible via{" "}
          <Link className="!text-[#2EB200]" href={" https://www.gencapita.com"}>
            {" "}
            https://www.gencapita.com
          </Link>
          .
        </p>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          General Information
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          GENCAPITA is an interactive platform accessible via its website and
          mobile application at{" "}
          <Link className="!text-[#2EB200]" href={" https://www.gencapita.com"}>
            {" "}
            https://www.gencapita.com
          </Link>{" "}
          (the “Site” or “App”). All content and communications provided are for
          informational purposes only and should not be considered
          recommendations to buy or sell securities. Investments are subject to
          market risks, and their value may fluctuate over time, potentially
          resulting in the loss of principal. Gen does not offer personalized
          investment advice or provide clients with financial, tax, estate, or
          retirement planning services. Advisory services are provided by Gen
          Invest LLC only to investors who are clients under the Customer
          Agreement. PAST PERFORMANCE DOES NOT GUARANTEE FUTURE RESULTS, AND ANY
          EXPECTED RETURNS OR HYPOTHETICAL PROJECTIONS PRESENTED MAY NOT ALIGN
          WITH ACTUAL OUTCOMES. PAST RETURNS MAY REPRESENT PERFORMANCE OVER
          LIMITED TIMEFRAMES OR DURING PERIODS OF HIGH MARKET VOLATILITY. ALL
          INVESTMENTS CARRY RISK AND MAY RESULT IN FINANCIAL LOSS. There is no
          assurance that the recommended investment will achieve or surpass the
          projected performance shown on the Site or App or meet the anticipated
          outcomes.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Self-Directed Trading
        </p>
        <div className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          <div>
            <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] ">
              {" "}
              All client accounts are self-directed, meaning customers are
              solely responsible for all orders placed in their accounts.
              Customers acknowledge that any orders they enter are unsolicited
              and based on their investment decisions or those of their
              authorized representatives or agents. By using the App, users
              agree that neither Gen nor its employees, agents, principals, or
              representatives
            </p>
            <ol
              className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-[lower-alpha] pl-5 lg:pl-10 "
              type="a"
            >
              <li>Provide investment advice related to customer accounts,</li>
              <li>Recommend securities, transactions, or orders,</li>
              <li>Solicit orders,</li>
              <li>Act as market makers for any security,</li>
              <li>Execute discretionary trades, or</li>
              <li>Create or distribute research.</li>
            </ol>
            <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] ">
              {" "}
              Any research materials or similar information available through
              <Link
                className="!text-[#2EB200]"
                href={" https://www.gencapita.com"}
              >
                {" "}
                https://www.gencapita.com
              </Link>{" "}
              or its affiliates’ websites and newsletters are strictly for
              informational and educational purposes. These materials do not
              constitute recommendations for specific securities transactions or
              investment strategies.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Risks of Trading & Investing
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          All forms of securities trading, including stocks, exchange-traded
          funds (ETFs), options, or other investment vehicles, are speculative
          and involve substantial risk of loss. Gen encourages its customers to
          invest responsibly and utilize resources such as the U.S. Securities
          and Exchange Commission (SEC) at{" "}
          <Link className="!text-[#2EB200]" href={"http://www.sec.gov"}>
            {" "}
            http://www.sec.gov
          </Link>{" "}
          and the Financial Industry Regulatory Authority (FINRA) at{" "}
          <Link className="!text-[#2EB200]" href={"http://FINRA.org"}>
            {" "}
            http://FINRA.org
          </Link>{" "}
          . Public company filings can be reviewed on the SEC’s EDGAR page, and
          FINRA provides valuable guidance on careful investing. Some of this
          information may also be available on GENCAPITA’s website. Gen
          emphasizes the importance of understanding all risks of trading or
          investing before committing to real funds. Past performance is not
          indicative of future results. Customers are responsible for their
          trading actions and should thoroughly assess the risks.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Key Considerations
        </p>
        <ul className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-decimal pl-5 lg:pl-10 mt-2 lg:mt-4">
          <li>
            Risk of Loss
            <ol
              className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-[lower-alpha] pl-5 lg:pl-10 "
              type="a"
            >
              <li>
                Trading and investing in securities is inherently risky, and you
                may lose money, including your principal. Customers should only
                trade with funds they can afford to lose.
              </li>
              <li>
                A general guideline is to risk no more than 5% of liquid net
                worth, and often less, especially if that 5% represents critical
                savings like retirement funds.
              </li>
              <li>
                Trading stocks, ETFs, and options involve high risk and the
                potential for significant losses.
              </li>

              <li>
                Margin trading adds further risk, including interest charges,
                the possibility of losing more than your initial deposit, or the
                need to add collateral during market declines. Customers must
                carefully evaluate whether margin trading aligns with their
                financial goals, risk tolerance, and experience.
              </li>
            </ol>
          </li>

          <li>
            No Guarantees
            <ol
              className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-[lower-alpha] pl-5 lg:pl-10 "
              type="a"
            >
              <li>
                Past performance is not a reliable indicator of future outcomes.
              </li>
              <li>
                All investments carry risk, and trading decisions remain solely
                the customer's responsibility.
              </li>
              <li>
                There are no guarantees that trading systems, indicators, or
                signals will result in profits or avoid losses. Customers should
                fully understand the risks of their chosen trading or investing
                strategies.
              </li>
            </ol>
          </li>

          <li>
            Gen’s Role
            <ol
              className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-[lower-alpha] pl-5 lg:pl-10 "
              type="a"
            >
              <li>
                Gen offers technology, support, and administrative services but
                does not advise on the suitability or risks of investments.
                Customers should rely on their knowledge and, if needed, consult
                independent advisors to address challenges that may arise.
              </li>
            </ol>
          </li>

          <li>
            Stop Orders
            <ol
              className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-[lower-alpha] pl-5 lg:pl-10 "
              type="a"
            >
              <li>
                Stop orders limit potential losses by triggering a trade when a
                stock reaches a specified price.
              </li>

              <li>
                However, in volatile markets, the execution price may differ
                significantly from the stop price due to rapid market movements.
              </li>

              <li>
                Brokers must execute the order at the best available price under
                such conditions. While stop orders may help reduce trading risk,
                they cannot eliminate it.
              </li>
            </ol>
          </li>
        </ul>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          Investing is a personal and complex decision. Gen encourages customers
          to remain informed, cautious, and proactive in managing their
          financial strategies.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-[16px] lg:text-[20px] font-[700] text-[#090A0B] leading-[25px] mt-4">
          Risks of Investing in Stocks & ETFs
        </p>
        <div className="mt-4">
          <div>
            <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] ">
              Investing always carries some degree of risk. It is essential to
              understand the following considerations when investing in stocks
              and exchange-traded funds (ETFs):
            </p>
            <p className="text-[14px] lg:text-[17px] font-[600] text-[#383D41] leading-[25px] lg:my-4 my-2">
              Stock Investments
            </p>
            <ul className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px]  pl-5 lg:pl-10 list-decimal  ">
              <li>
                Liquidity Risks: Some stocks may be difficult to sell or convert
                into cash quickly. Check for potential penalties or charges for
                early sale before investing.
              </li>
              <li>
                Company-Specific Risks: Stocks issued by companies with limited
                operating history or insufficient public information carry
                higher risks than stocks of well-established companies with
                extensive public disclosures. 
              </li>

              <li>
                Federal Insurance: Stock investments are not federally insured
                and are subject to market value losses without government
                protection.
              </li>

              <li>
                Corporate Actions: Stocks may be impacted by tender offers,
                mergers, reorganizations, or third-party actions. Carefully
                review public announcements and documentation about such events,
                as they often involve complex decisions. Ensure you fully
                understand the terms before acting, as inaction in some
                scenarios (e.g., partial or two-tier tender offers) could
                negatively affect your investment.
              </li>
              <li>
                Value Risks: The most significant risk of owning a stock is the
                potential for its value to drop to zero. Conversely,
                short-selling stocks—a strategy involving selling securities the
                seller does not own—pose significant risk. The seller may face
                substantial losses if the stock price rises instead of falling.
                Short selling requires careful consideration of market
                conditions and potential liability for price increases.
              </li>
            </ul>

            <p className="text-[14px] lg:text-[17px] font-[600] text-[#383D41] leading-[25px] lg:my-4 my-2">
              ETF Investments
            </p>
            <ul className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px]  pl-5 lg:pl-10 list-decimal  ">
              <li>
                Suitability and Risk Profile: Investors should evaluate their
                objectives and risk tolerance before investing in ETFs. ETFs
                carry risks similar to those of other diversified portfolios,
                including exposure to market volatility.
              </li>
              <li>
                Leveraged and Inverse ETFs: These specialized ETFs may use
                complex strategies such as leverage, short sales, and
                derivatives, which can amplify volatility. They may not be
                suitable for all investors.
              </li>

              <li>
                Performance Tracking: ETFs aim to replicate the performance of
                their underlying indices but may not do so precisely due to
                expenses, fees, or other factors.
              </li>

              <li>
                Prospectus Review: A prospectus contains essential information
                about the ETF, including its risks and objectives. It is crucial
                to review this document thoroughly before investing.
                Prospectuses can be obtained from issuers or their authorized
                distributors.
              </li>
              <li>
                Portfolio Gains and Tax Implications: ETFs must distribute
                portfolio gains to shareholders at year-end, which may result
                from rebalancing or diversification requirements. Trading ETFs
                can also lead to taxable events, and investors should consider
                these consequences when trading.
              </li>
            </ul>

            <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] lg:my-4 my-2 ">
              Investors should remain informed, perform due diligence, and
              carefully assess the risks before committing to stock or ETF
              investments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
