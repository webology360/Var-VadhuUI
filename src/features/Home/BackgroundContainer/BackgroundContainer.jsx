import React from "react";
import GaneshJi from "../../../assets/images/Home/GaneshJi.svg";
import HomeBg from "../../../assets/images/Home/HomeBg.svg";
import HomeQuote from "../../../assets/images/Home/HomeQuote.svg";
import Rectangle1 from "../../../assets/images/Home/Rectangle 1.svg";
import Rectangle2 from "../../../assets/images/Home/Rectangle 2.svg";
import Rectangle3 from "../../../assets/images/Home/Rectangle 3.svg";
import Rectangle4 from "../../../assets/images/Home/Rectangle 4.svg";
import classes from "./BackgroundContainer.module.scss";

const BackgroundContainer = () => {
  return (
    <div className={classes.backgroundContainer}>
      <img
        src={GaneshJi}
        className={classes.backgroundContainer__ganeshJiImg}
        alt="ganeshJi"
      />
      <img
        src={HomeBg}
        className={classes.backgroundContainer__homeImg}
        alt="home design"
      />
      <img
        src={HomeQuote}
        className={classes.backgroundContainer__quoteImg}
        alt="home quote"
      />
      <img
        src={Rectangle1}
        className={classes.backgroundContainer__img1}
        alt="Sample1"
      />
      <img
        src={Rectangle2}
        className={classes.backgroundContainer__img2}
        alt="Sample2"
      />
      <img
        src={Rectangle3}
        className={classes.backgroundContainer__img3}
        alt="Sample3"
      />
      <img
        src={Rectangle4}
        className={classes.backgroundContainer__img4}
        alt="Sample4"
      />
    </div>
  );
};

export default BackgroundContainer;
