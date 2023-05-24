import React from "react";
import classes from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div className={classes.contactUs}>
      <div className={classes.contactUs__header}>Contact Us</div>
      <div className={classes.contactUs__body}>
        <div className={classes.contactUs__body__description}>
          <b>Address</b> - J585+HCG, Sahu bhawan, Langer toli chauraha, Bihari
          Sao Ln, Patna, Bihar 800004
        </div>
        <div className={classes.contactUs__body__contacts}>
          <div className={classes.contactUs__body__contacts__contactDetails}>
            <div
              className={
                classes.contactUs__body__contacts__contactDetails__heading
              }
            >
              Office Assistant
            </div>
            <br />
            Vinod Kumar <b>(9334838749)</b>
            <br />
            Dinesh Kumar <b>(6207736362)</b>
          </div>
          <div className={classes.contactUs__body__contacts__contactDetails}>
            <div
              className={
                classes.contactUs__body__contacts__contactDetails__heading
              }
            >
              Website Onwer
            </div>
            <br />
            G.Gaurav <b>(9902738900)</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
