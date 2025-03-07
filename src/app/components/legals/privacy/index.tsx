import React from "react";
import LegalHeader from "..";
import Link from "next/link";

const Privacy = () => {
  return (
    <div className="pb-[130px]">
      <LegalHeader title="Privacy Policy" />{" "}
      <div className="mt-10">
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px]">
          At Gen, protecting your privacy and ensuring transparency in managing
          and processing your information is important to us. This Gen Capita
          Privacy Policy (the “Privacy Policy”) outlines how Gen Financial Inc.
          and its affiliates, including Gen Invest LLC and [Gen Capita]
          (collectively referred to as “Gen,” “we,” “our,” or “us”) process the
          information we collect about you through our website, mobile apps, and
          other services (collectively referred to as the “Services”), and when
          you interact with us through our customer service channels.
        </p>
      </div>
      <div className="mt-10">
        <div>
          <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] ">
            {" "}
            This document contains the following sections:
          </p>
          <ol
            className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-[lower-alpha] pl-5 lg:pl-10 "
            type="a"
          >
            <li> Information We Collect</li>
            <li>How We Use Your Information.</li>
            <li>Disclosure of Information</li>
            <li> Third-Party Tracking and Online Advertising</li>
            <li>Your Rights and Controls</li>
            <li>Additional Privacy Rights</li>
            <li>Children</li>
            <li>Transfer of Information</li>
            <li>Updates to this Policy</li>
            <li>Contact Us</li>
          </ol>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Information We Collect
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#090A0B] leading-[25px] mt-4">
          Information you provide
        </p>
        <div className="mt-4">
          <div>
            <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] ">
              We collect information you provide when you use or apply to our
              Services or engage or communicate with us in other ways, as
              outlined below.
            </p>
            <ol
              className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-[lower-alpha] pl-5 lg:pl-10 "
              type="a"
            >
              <li>
                Personal Information: Includes your name, date of birth, marital
                status, social security number, photos of your face and
                government-issued identification documents, and other details on
                government-issued IDs.
              </li>
              <li>
                Contact Information: Your email address, mailing address, and
                phone number.
              </li>
              <li>
                Financial Information: Includes bank account and payment card
                details, information about income, account balances, transaction
                history, credit history, tax information, and credit scores.
              </li>
              <li>
                {" "}
                Profile Data: Includes your username, password, knowledge
                assessment results, interests, preferences, feedback, and survey
                responses.
              </li>
              <li>
                Stored Content: This includes photos from your mobile phone
                gallery or contacts stored on your mobile device or email
                accounts. We collect this information only with your permission.
              </li>
              <li>
                Additional Information You Provide: This may include information
                provided through focus groups, survey responses,
                contests/sweepstakes, customer support, or memos you write when
                using our Pay & Request Service.
              </li>
              <li>
                Information for BankSync Service: To process funding requests
                through our BankSync services, such as deposit, withdraw, and
                transfer, we collect information including name, email address,
                phone number, and bank account information of you or your
                recipients.
              </li>
              <li>
                Other Information You Provide: Any additional personal data you
                choose to share with us. For instance, uploading a photograph to
                our Service must comply with our App Use Standards, which apply
                to all users. You may also provide information about additional
                authorized users, including their identity, contact information,
                and financial data.
              </li>
            </ol>
          </div>
        </div>

        <p className="text-[14px] lg:text-[17px] font-[400] text-[#090A0B] leading-[25px] mt-4">
          Information you provide
        </p>
        <div className="mt-4">
          <div>
            <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] ">
              We also collect some information about you automatically when you
              use our Services. They are outlined below.
            </p>
            <ol
              className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-[lower-alpha] pl-5 lg:pl-10 "
              type="a"
            >
              <li>
                Usage Information: We collect details about your activity on our
                Services, such as device identifiers (e.g., IP address or mobile
                device ID), the pages or features you access, the time and date
                of each interaction, and similar usage data.
              </li>
              <li>
                Transactional Information: When you complete a transaction
                through our Services, we collect details, including the amount,
                type, nature, and time and date.
              </li>

              <li>
                Location Data: With your device permissions, we may collect your
                mobile device's GPS location. You can manage this collection
                through your device settings (see the Your Controls section
                below). Google may use technologies, including IP address, to
                approximate your location (see Google’s Privacy Policy at
                https://policies.google.com/privacy for more details).
              </li>

              <li>
                {" "}
                Information Collected Through Tracking Technologies: Along with
                our service providers, we use cookies and web beacons to
                automatically collect certain types of usage and device data
                when you use our Services or engage with our emails. This data
                includes your IP address, browser type, internet service
                provider, platform type, device type, operating system, date and
                time, unique device or account ID, usage patterns, and other
                related information. See the Your Controls section below for
                information on disabling cookies.
              </li>
              <li>
                Inferred Data: We may also make inferences about specific
                attributes, such as gender, based on information like your first
                name.
              </li>
            </ol>
          </div>
        </div>

        <p className="text-[14px] lg:text-[17px] font-[400] text-[#090A0B] leading-[25px] mt-4">
          Information collected by other source
        </p>
        <div className="mt-4">
          <div>
            <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] ">
              We also collect some information about you from other sources.
              They are outlined below.
            </p>
            <ol
              className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-[lower-alpha] pl-5 lg:pl-10 "
              type="a"
            >
              <li>
                Vendors and Business Partners: We collect details from companies
                we work with, such as your name, contact information, inferred
                preferences, and attributes, and assess fraud risk from partners
                who handle identity verification and fraud prevention.
              </li>
              <li>
                Linking Financial Accounts: We may receive financial account
                information about you from third parties, such as your financial
                institutions. For example, Gen Capita offers account linking and
                aggregation services through Plaid, Inc. (“Plaid”). By using
                these services, you agree to Plaid’s Privacy Policy (available
                at{" "}
                <Link
                  href={"https://plaid.com/legal/#end-user-privacy-policy"}
                  className="text-[#2EB200]"
                >
                  https://plaid.com/legal/#end-user-privacy-policy
                </Link>{" "}
                ), granting Plaid the right to access and transmit your
                information as needed to deliver its services. If you previously
                used account linking services through a former provider, you
                authorize that provider to transfer data to Plaid.
              </li>

              <li>
                Connected Services: If you link, connect, or log in to your Gen
                Capita account through a third-party service (e.g., Google, or
                Apple), that service may share information with us, such as
                profile details. The information shared depends on the
                third-party service and your privacy settings.
              </li>

              <li>
                Publicly Available Information: This includes information
                available from public sources, such as contact details,
                interactions with our social media accounts, and other
                information from public websites.
              </li>
              <li>
                Advertising Data: We collect data related to our ad campaigns on
                external platforms, including the ads you click on and other
                ways you interact with our ads.
              </li>
              <li>
                Data from Other Users: If you appear in another user’s contact
                list and they share that list with us, we collect your contact
                information and the relationship details provided by that user.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-[16px] lg:text-[20px] font-[700] text-[#090A0B] leading-[25px] mt-4">
          How we Use your Information
        </p>
        <div className="mt-4">
          <div>
            <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] ">
              We use the the information we collect for the purposes outlined
              below or as communicated to you at the time of collection:
            </p>
            <ol
              className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-[lower-alpha] pl-5 lg:pl-10 "
              type="a"
            >
              <li>
                Provide and Maintain Services: This includes processing account
                applications, verifying your identity, supporting and
                troubleshooting our Services, handling transactions, and
                managing billing and accounts.
              </li>
              <li>
                Send Transactional and Relationship Communications: We may send
                confirmations, invoices, technical notices, customer support
                responses, software updates, security alerts, and information
                about your transactions.
              </li>

              <li>
                Engage with You on Relevant Offers: We communicate with you
                about offers, newsletters, product announcements, partner
                offerings, surveys, contests, sweepstakes, events, and other
                updates we believe may interest you.
              </li>

              <li>
                Personalize Your Experience: We tailor our Services by
                suggesting relevant content or customizing the content and ads
                you see.
              </li>
              <li>
                Analyze and Improve Our Services: We monitor usage, conduct
                research, and support development efforts to enhance our
                Services.
              </li>
              <li>
                Manage Promotions and Rewards: We facilitate contests,
                sweepstakes, and promotions, handling entries and delivering
                rewards.
              </li>
              <li>
                Ensure Security and Safety: We work to protect our Services,
                business, and users by investigating and preventing fraud and
                other unlawful activities.
              </li>

              <li>
                Protect Our Legal Rights: We protect or exercise our legal
                rights, including enforcing agreements and handling legal
                claims.
              </li>

              <li>
                Meet Legal and Regulatory Requirements: We comply with
                applicable laws, such as those related to regulated registered
                investment advisers.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-[16px] lg:text-[20px] font-[700] text-[#090A0B] leading-[25px] mt-4">
          Disclosure of Information
        </p>
        <div className="mt-4">
          <div>
            <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] ">
              We use the the information we collect for the purposes outlined
              below or as communicated to you at the time of collection:
            </p>
            <ol
              className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-[lower-alpha] pl-5 lg:pl-10 "
              type="a"
            >
              <li>
                Authorized Vendors: We share your information with third-party
                vendors and service providers who support us in services such as
                identity verification, fraud prevention, advertising, mailing,
                tax and accounting, contest fulfillment, web hosting, and
                analytics. 
              </li>
              <li>
                Authorized Personnel: Our employees, agents, consultants,
                contractors, and other authorized personnel, including those
                from our contractors, service providers, subsidiaries, and
                affiliates, may access user information as necessary in the
                ordinary course of our business.
              </li>

              <li>
                Legal and Law Enforcement: We may disclose any information,
                including personal information, as we deem necessary to comply
                with applicable laws, regulations, legal processes, or
                government requests. We may also share information with other
                organizations to protect the rights, property, or safety of the
                company, its affiliates, employees, users, or others. We reserve
                the right to disclose a user’s personal information if we
                believe, in good faith, that they are violating our Terms of
                Service, even without a subpoena, warrant, or court order.
              </li>

              <li>
                Banking and Rewards Partners: When applicable, we share your
                information with banking partners and rewards partners (e.g.,
                travel or shopping rewards partners) through which you can
                redeem rewards.
              </li>
              <li>
                Companies in Which You Hold Securities: We may provide your
                name, address, email address, and securities positions to
                companies in which you hold securities if they request this
                information.
              </li>
              <li>
                Gen Affiliates: We disclose your information to affiliated
                companies within our organization when appropriate. These
                affiliates process any shared information in accordance with
                this Privacy Policy.
              </li>
              <li>
                Substantial Corporate Transactions: In the event of a
                significant corporate transaction, such as a merger,
                reorganization, acquisition, or in the unlikely scenario of
                bankruptcy, we may disclose your information to the relevant
                parties involved.
              </li>

              <li>
                Legal Requirements: We disclose information if we believe it is
                necessary to comply with any applicable law or legal process or
                to protect and defend the rights, interests, safety, and
                security of our company, our users, or the public.
              </li>

              <li>
                Social Media: We may incorporate applications or widgets from
                social media platforms, enabling interaction and content
                sharing. These widgets, such as a Facebook “Share” or “Like”
                button, are visible on our web pages. Integration with social
                media networks (e.g., Facebook, Twitter) may allow them to
                collect information about you, even if you do not interact with
                the widget. For details on data collection and privacy controls,
                please review the privacy policies of these social media
                networks, as they govern how your information is collected,
                used, and shared.
              </li>

              <li>
                Aggregated or De-Identified Data: We may also disclose data in
                an aggregated or de-identified format that does not reasonably
                identify you.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Third-Party Tracking and Online Advertising
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          We work with third-party advertising and analytics providers to
          understand your online activities and present you with targeted
          advertisements. For instance, we use Google Analytics, and you can
          learn more about Google’s data processing practices at “How Google
          uses information from sites or apps that use our services”:
          <Link
            className="!text-[#2EB200]"
            href={"http://www.google.com/policies/privacy/partners/"}
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

        <br />

        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          We, along with our third-party partners, utilize this information to
          analyze and track usage, assess content popularity, deliver targeted
          ads on our Services and other platforms, and provide related services
          such as reporting, attribution, analytics, and market research.
        </p>

        <br />

        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          For more details on interest-based advertising and how to opt out of
          targeted ads based on your web browsing data, visit{" "}
          <Link className="!text-[#2EB200]" href={"www.aboutads.info/choices"}>
            www.aboutads.info/choices
          </Link>{" "}
          . Additionally, review your mobile device settings for options that
          allow you to control data collection for behavioral advertising. As a
          self-directed broker-dealer, please note that we do not advertise
          specific securities or investment options within our Services.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-[16px] lg:text-[20px] font-[700] text-[#090A0B] leading-[25px] mt-4">
          Your Rights & Controls
        </p>
        <div className="mt-4">
          <div>
            <ol
              className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-[lower-alpha] pl-5 lg:pl-10 "
              type="a"
            >
              <li>
                Account Profile: You can update certain information in your
                account profile by logging in. For some products and services
                certain information cannot be changed due to legal requirements,
                and we may be unable to fulfill such requests. Any changes to
                your profile must comply with our App Use Standards.
              </li>
              <li>
                Access to Device Data and Location: You can manage our app’s
                access to certain stored device data and your precise location
                through your device’s settings. For instance, you may withdraw
                permission for the app to access your contact list or photo
                gallery.
              </li>

              <li>
                Communication Preferences: You may opt out of receiving
                promotional emails by clicking the “unsubscribe” link in those
                emails. However, we may still send you service-related or
                non-promotional messages such as account notifications,
                receipts, security alerts, and other transactional or
                relationship communications.
              </li>

              <li>
                Affiliate Sharing Opt-Out: In some situations, you can limit
                data sharing among our affiliates. Please refer to our relevant
                Financial Privacy Notices. To exercise this option, contact us
                at privacy@gencapita.com.
              </li>
              <li>
                Disabling Certain Data Sharing: You may restrict the sharing of
                your information with our marketing partners, which limits
                personalized marketing across platforms. When disabled, we will
                no longer share your data with partners for these purposes.
              </li>
              <li>
                Cookie Controls: Most web browsers accept cookies by default,
                but you can adjust your browser settings to delete or reject
                cookies and similar tracking technologies. Note that disabling
                these technologies may impact some features of our Services. If
                you switch devices, change browsers, or delete opt-out cookies,
                you may need to repeat this process.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Additional Privacy Rights
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          This section outlines additional information regarding personal data
          collection and the rights afforded to California and Virginia
          residents under the California Consumer Privacy Act (CCPA) and the
          Virginia Consumer Data Protection Act (VCDPA). Please note that the
          CCPA does not apply to nonpublic personal information collected by
          financial institutions, as this information falls under separate
          financial privacy laws. Likewise, the VCDPA does not apply to Gen
          entities classified as financial institutions. As such, these laws do
          not cover most of the information Gen collects.
        </p>
        <br />
        <div>
          <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] ">
            With certain limitations and exceptions, the CCPA and VCDPA provide
            residents of California and Virginia specific rights. Depending on
            your state of residence, you may have the right to:
          </p>
          <ol
            className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] !list-[lower-alpha] pl-5 lg:pl-10 "
            type="a"
          >
            <li>Confirm whether Gen processes your personal data.</li>
            <li>Correct inaccurate personal information.</li>

            <li>
              Request, in an accessible format, details about the categories and
              specific data elements we collect.
            </li>

            <li>Delete your personal data.</li>
            <li>
              Opt out of sales, sharing, targeted advertising, or certain
              profiling (as defined by the CCPA and/or VCDPA).
            </li>
            <li>Not experience discrimination for exercising these rights.</li>
          </ol>
        </div>
        {/* <br /> */}
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          Gen does not sell your personal information to third parties. However,
          we may allow third parties to gather information through our Services
          to support our advertising and marketing on other platforms. For more
          information, including how you can manage these options, please refer
          to the “Third-Party Tracking and Online Advertising” section.
        </p>

        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          We collect the following categories of personal information:
          identifiers (e.g., name, email address, IP address), online activity
          data (e.g., engagement with ads and promotional messages), and
          inferences (e.g., gender based on first name). For California
          residents, this list reflects our data processing over the past 12
          months. More details, including information sources and processing
          purposes, are available in the “Information We Collect and How We
          Collect It” section. We share this information with the categories of
          third parties listed in the “Disclosures of Information” section.
        </p>

        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          California and Virginia residents may exercise their rights under the
          CCPA and VCDPA (where applicable) by making a request. If you use the
          Gen Capita app, you can log into your account, go to the Security and
          Privacy menu, and select either “Download Personal Data” or “Request
          Data Deletion.” You may also reach out for assistance by emailing
          privacy@gencapita.com. We may verify your request by matching it with
          information we have on file. You can also designate an authorized
          representative to act on your behalf, but we will require proof of
          authorization and may ask for additional verification. If you are a
          Virginia resident and your request under the VCDPA cannot be
          fulfilled, you are entitled to appeal by emailing
          privacy@gencapita.com.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Indemnification
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          You agree to indemnify and hold harmless Gen and its Third-Party
          Providers, along with their officers, directors, agents, partners,
          employees, licensors, distributors, and representatives, from any and
          all claims, demands, actions, suits, proceedings, losses, damages,
          costs, and expenses, including reasonable attorneys’ fees, arising
          from your access to or use of the Content (including Third-Party
          Content) or any interactions related to your account. This includes,
          but is not limited to, claims arising from inaccurate, incomplete, or
          misleading information; libel; invasion of privacy; infringement of
          copyrights, trade names, trademarks, service marks, or other
          intellectual property rights; any defective product; or any injury or
          damage to persons or property resulting from products sold or
          distributed in connection with the Service; as well as any violations
          of applicable laws.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Children
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          CHILDREN <br /> We do not knowingly collect or request personal
          information from anyone under the age of 13 through our Services. If
          we learn that a child under 13 has shared personal information with us
          without being added as an authorized user by a parent or guardian, we
          will make reasonable efforts to delete that information. If you
          believe we may have received information from a child under 13 who is
          not an authorized user, please reach out to us at{" "}
          <Link
            href={"malito:privacy@gencapita.com."}
            className="!text-[#2EB200]"
          >
            privacy@gencapita.com.
          </Link>
        </p>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Transfer of Information
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          Our Services are designed for use both within and outside the United
          States. If you access our Services from a jurisdiction outside the
          U.S., please be aware that your information may be processed in the
          United States or other countries where data protection standards may
          differ from those in your home jurisdiction.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Updates to this Policy
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          This Privacy Policy may change over time. When updates are made, we
          will revise the “Effective Date” at the top and post the updated
          Policy. In certain cases, we may also provide additional notice, such
          as by displaying a statement on our website or sending you a
          notification. We encourage you to review this Policy regularly to stay
          informed of our privacy practices as you continue to use our Services.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-[#090A0B] font-[700] text-[16px]  lg:text-[20px] ">
          Contact Us
        </p>
        <p className="text-[14px] lg:text-[17px] font-[400] text-[#383D41] leading-[25px] mt-2 lg:mt-4">
          If you have any questions regarding this Privacy Policy, please reach
          out to us at{" "}
          <Link
            href={"malito:privacy@gencapita.com."}
            className="!text-[#2EB200]"
          >
            privacy@gencapita.com.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Privacy;
