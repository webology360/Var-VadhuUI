import React from "react";
import classes from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div className={classes.contactUs}>
      <div className={classes.contactUs__header}>Contact Us</div>
      <div className={classes.contactUs__body}>
        <div className={classes.contactUs__body__description}>
          <b>Address</b> - Webology.in , Near Punjab National Bank, DB Road,
          Saharsa 852201 BIHAR, INDIA
        </div>
        <div className={classes.contactUs__body__contacts}>
          <div className={classes.contactUs__body__contacts__contactDetails}>
            <div
              className={
                classes.contactUs__body__contacts__contactDetails__heading
              }
            >
              Office Bearer
            </div>
            <br />
            Sudhir Rajhans <b>(9431892528)</b>
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
