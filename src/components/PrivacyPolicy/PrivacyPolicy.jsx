import React from "react";
import classes from "./PrivacyPolicy.module.scss";
import { Link } from "react-scroll";

const PrivacyPolicy = () => {
  return (
    <div className={classes.privacyPolicyMain}>
      <div className={classes.body}>
        <h2>ShadiRista.com Privacy Policy</h2>
        <div className={classes.heading}>Effective Date: 8th Jan 2019</div>
        <div className={classes.heading}>Last updated on: 19th Jan 2023</div>
        <div className={classes.header}>
          HOW YOUR PERSONAL DATA WILL BE PROCESSED BY ShadiRista.com{" "}
        </div>
        <p>
          The protection of your personal data (user of Shot classes) has the
          highest priority for Webology Limited (Webology/ us/ Our) and is
          considered in all our business processes. In the following data
          protection information, you will receive a detailed overview of the
          processing of your personal data by Webology.
          <p>
            Personal data includes any information relating to an identified or
            identifiable natural person. With this data protection information,
            we inform you about the type, scope and purpose of collecting
            personal data at Webology and how we deal with these data. In
            addition, you will learn about your rights regarding of your
            personal data.{" "}
          </p>
          <p>
            The following information applies to all natural persons whose
            personal data are saved in connection to the supplier business
            relationship (e.g. authorized persons).{" "}
          </p>
        </p>
        <div className={classes.subheader}>
          {" "}
          Click on one of the links below to obtain more information in the
          listed section:
        </div>
        <div id="toc">
          <div className={classes.toc_list_co}>
            <ul>
              <li className={classes.PrivacyPolicyLink}>
                <Link
                  className="space_h2"
                  to="Policy1"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-150}
                >
                  1. WHO IS RESPONSIBLE FOR PROCESSING MY DATA?
                </Link>
              </li>
              <li className={classes.PrivacyPolicyLink}>
                <Link
                  className="space_h2"
                  to="Policy2"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-150}
                >
                  2. WHO ARE THE RECEIPIENTS OF MY DATA
                </Link>
              </li>
              <li className={classes.PrivacyPolicyLink}>
                <Link
                  className="space_h2"
                  to="Policy3"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-150}
                >
                  3. WHERE IS MY DATA DERIVED FROM AND WHICH DATA IS PROCESSED?
                </Link>
              </li>
              <li className={classes.PrivacyPolicyLink}>
                <Link
                  className="space_h2"
                  to="Policy4"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-150}
                >
                  4. WHAT ARE MY DATA USED FOR (PURPOSE OF PROCESSING)?
                </Link>
              </li>
              <li className={classes.PrivacyPolicyLink}>
                <Link
                  className="space_h2"
                  to="Policy5"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-150}
                >
                  5. WHAT IS THE LEGAL BASIS OF PROCESSING MY DATA?
                </Link>
              </li>
              <li className={classes.PrivacyPolicyLink}>
                <Link
                  className="space_h2"
                  to="Policy6"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-150}
                >
                  6. ARE MY DATA FORWARDED?
                </Link>
              </li>
              <li className={classes.PrivacyPolicyLink}>
                <Link
                  className="space_h2"
                  to="Policy7"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-150}
                >
                  7. HOW LONG ARE MY DATA STORED?
                </Link>
              </li>
              <li className={classes.PrivacyPolicyLink}>
                <Link
                  className="space_h2"
                  to="Policy8"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-150}
                >
                  8. WHAT RIGHTS DO I HAVE VIS-À-VIS Webology?
                </Link>
              </li>
              <li className={classes.PrivacyPolicyLink}>
                <Link
                  className="space_h2"
                  to="Policy9"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-150}
                >
                  9. RIGHT TO COMPLAIN TO THE CONTROLLING DATA PROTECTION
                  AUTHORITY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <h3 id="Policy1">1. WHO IS RESPONSIBLE FOR PROCESSING MY DATA?</h3>
      <div className={classes.subheaderInfo}>
        <b>Webology and Microsoft Azure PaaS</b>
        <p>
          Webology hosts ShadiRista.com in Microsoft Azure PaaS service. All
          personal data received from customer is stored in Azure storages.
        </p>
        <p>
          <i>
            Webology is the data processor and Microsoft is sub-data Processor.
          </i>
        </p>
      </div>
      <h3 id="Policy2">2. WHO ARE THE RECEIPIENTS OF MY DATA</h3>
      <div className={classes.subheaderInfo}>
        <b>Only Webology</b>
        <p>
          Personal data received from customer is not shared with other person
          or entity
        </p>
      </div>
      <h3 id="Policy3">
        3. WHERE IS MY DATA DERIVED FROM AND WHICH DATA IS PROCESSED?
      </h3>
      <div className={classes.subheader}>
        3.1 General data from the business relationship
      </div>
      <div className={classes.subheaderInfo}>
        <p>
          {" "}
          We process the data provided to us by you in connection with our
          business relationship, in particular
        </p>
        <div className={classes.subheaderInfoSub}>
          <p>
            {" "}
            a) contact data of the supplier's, stakeholder contact person, in
            particular the address, name, business address, telephone number and
            email address;
          </p>
          <p>
            {" "}
            b) master data changes conducted by you, e.g. personal data changes;
          </p>
        </div>
      </div>
      <p>
        {" "}
        <div className={classes.subheader}>3.2 Data from other sources</div>
        <div className={classes.subheaderInfo}>
          <p>
            {" "}
            Personal data can be accessed while using third parties system and
            can only be processed if this is legally permitted, e.g. in order to
            perform our contractual duties.
          </p>
          <p>This may include in particular the following data.</p>
        </div>
        <div className={classes.subheaderInfoSub}>
          <p>a) Name, Email of a User </p>
          <p> b) Other Data (User Department, User Group etc.)</p>
          <p>
            c) User image / display picture (Optional) – Application has access
            to Camera / Gallery, where in if user wishes to upload his/her
            profile photo they can upload via the app. And it will not be shared
            with anyone or to any thirdparty application.{" "}
          </p>
        </div>
      </p>
      <h3 id="Policy4">
        4. WHAT ARE MY DATA USED FOR (PURPOSE OF PROCESSING)?
      </h3>
      <div className={classes.subheader}>
        {" "}
        4.1 Collection and processing with regards to the business relationship
      </div>
      <div className={classes.subheaderInfo}>
        <p>
          We collect and process personal data specified above in order to
          fulfill our contractual obligations.
        </p>
        <p>
          By entering a business relationship as a prospective customer,
          supplier or business partner, we will store and process your contact
          data and information on business procedures and communication with
          you, at least for the duration of the business relationship.{" "}
        </p>
      </div>
      <h3 id="Policy5">5. WHAT IS THE LEGAL BASIS OF PROCESSING MY DATA?</h3>
      <div className={classes.subheader}>
        {" "}
        5.1 Processing due to performance of contract
      </div>
      <div className={classes.subheaderInfo}>
        <p>
          Webology has entered into a contract with your organization for your
          organization to use Shot Classes. Processing is performed exclusively
          to fulfill the contractual and business obligations and for
          maintaining the supplier business relationship. ShadiRista.com
          process Name, User Name/Login ID, emails as a part of minimum basic
          personal data that is required to process a user data into the system.
          UserID/LoginId is required for user to login into the system Email is
          required for user to communicate, generate password, update user
          profile etc. ShadiRista.com uses business function such as
          Distribution, Reporting, Search etc. that may require user personal
          data in order to fulfill the business requests and we follow the Data
          protection such as masking, encryption while displaying user data.{" "}
        </p>
      </div>
      <div className={classes.subheader}>
        {" "}
        5.2 Processing due to a legitimate interest
      </div>
      <div className={classes.subheaderInfo}>
        <p>
          We process your personal data if required to safeguard the legitimate
          interests of Webology, its subsidiary units or third parties. Managing
          the contractual relationship, we have a legitimate interest in
          processing data to conduct credit checks and pursue claims, including
          the use of collection companies.
        </p>
      </div>
      <h3 id="Policy6">6. ARE MY DATA FORWARDED?</h3>
      <div className={classes.subheaderInfo}>
        {" "}
        <p>
          {" "}
          Webology is a globally acting company. As part of our business
          relations, personal data are also forwarded to subsidiaries of
          Webology and other third-party companies inside as well as outside the
          EU. Processing is performed exclusively to fulfill the contractual and
          business obligations and for maintaining the supplier business
          relationship. A uniform data protection level is created by the
          existence of binding internal data protection regulations and by
          standard contract for processing on behalf. You can find the Webology
          Data Protection Policy in the internet following{" "}
          <a
            className={classes.smallDescLi}
            href="https://www.Webology.com/general-privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            <u>https://www.Webology.com/general-privacy-policy</u>
          </a>{" "}
        </p>
        <p>
          As part of our procurement activities, we use data processors on
          behalf. Forwarding your data to these processors requires strict
          compliance with our confidentiality obligations as well as with the
          regulations of the GDPR (General Data Protection Regulation (EU)).
          Processors of data are only allowed to process the data for our
          purposes but not for their own and are obliged to comply with the
          standards of the Webology Group. The responsibility for data
          processing remains in these cases with Webology.{" "}
        </p>
      </div>
      <h3 id="Policy7">7. HOW LONG ARE MY DATA STORED?</h3>
      <div className={classes.subheaderInfo}>
        <p>
          {" "}
          We process and store your personal data only as long as required in
          order to fulfill our contractual, legal or internal procedure
          obligations. If there is no legitimate interest anymore, we will
          delete the data.{" "}
        </p>
      </div>
      <h3 id="Policy8">8. WHAT RIGHTS DO I HAVE VIS-À-VIS Webology?</h3>
      <div className={classes.subheaderInfo}>
        <p>
          {" "}
          With respect to your personal data you have extensive rights to claim.
          It is our special concern to familiarize you with these rights:
        </p>
      </div>
      <div className={classes.subheaderInfoSub}>
        <p>
          {" "}
          a) <b>Right on information:</b> You have the right on information on
          your stored data with us, especially for what purpose, and how long
          the data is stored.{" "}
        </p>
        <p>
          {" "}
          b) <b>Right to correct incorrect data:</b> You have the right to ask
          for immediate correction of your incorrectly stored personal data.{" "}
        </p>
        <p>
          c) <b>Right to restrict processing:</b> You have the right to ask for
          a restriction on the processing of your data. This right is
          particularly valid for the duration of the assessment in case of your
          claimed doubt of the correctness of your data and in case you wish a
          restricted processing of your data when you have the right on deletion
          of your data. Furthermore, a restriction of the processing of your
          data takes place, although the data is no longer required for the
          pursued purposes, in the case that you require the data to assert,
          exercise or defend legal rights as well as when the successful
          exercise of objection between you and us is in dispute.{" "}
        </p>
        <p>
          d) <b>Right to data portability:</b> You have the right to receive the
          personal data provided by you to us in a structured, common,
          machine-readable format, if they have not yet been deleted.{" "}
        </p>
        <p>
          {" "}
          e) <b>Right to oppose:</b> You have the right to object to the
          processing of personal data for reasons derived from your particular
          situation at any time. We will stop the processing of your personal
          data, unless we can prove compelling reasons for further processing
          which outweigh your interests, rights and freedoms, or if the
          processing pursues the assertion, exercise or defense of legal rights.
        </p>
      </div>
      <div className={classes.subheaderInfo}>
        <p>
          To exercise the rights outlined above or if you belong to any other
          jurisdiction that is not listed above in respect of your Personal
          Data, you may write to{" "}
          <a href="mailto:webology360@gmail.com">
            <u>webology360@gmail.com </u>
          </a>{" "}
          OR contact your respective Organization/Tenant Admin.
        </p>
      </div>
      <h3 id="Policy9">
        9. RIGHT TO COMPLAIN TO THE CONTROLLING DATA PROTECTION AUTHORITY
      </h3>
      <div className={classes.body}>
        <p>G. Gaurav - Adminstrator</p>
        <p>
          <b>Email : </b>
          <a href="mailto:webology360@gmail.com ">
            <u>webology360@gmail.com </u>
          </a>
        </p>
        
        <p>
          {" "}
          <b>Address : </b>
          <br />
          G. Gaurav
          <br />
          Webology.in , Near Punjab National Bank, DB Road
          <br />
          Saharsa 852201 <br />
          BIHAR, INDIA <br />
          Phone : +91 22 67766776
          <br />
          <p>
            {" "}
            Web :{" "}
            <a href="https://www.Webology.in" target="_blank" rel="noreferrer">
              <u>https://www.Webology.in</u>
            </a>
          </p>
        </p>
        <br />
        For further information please refer the link
        <a
          href="https://www.Webology.com/general-privacy-policy"
          target="_blank"
          rel="noreferrer"
        >
          <u> https://www.Webology.in/general-privacy-policy</u>
        </a>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
