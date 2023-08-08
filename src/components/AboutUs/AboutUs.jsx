import React from "react";
import DefaultUser from "../../assets/images/user.png";
import President from "../../assets/images/President.jpg";
import classes from "./AboutUs.module.scss";
import CircularImage from "../common/CircularImage/CircularImage";

const AboutUs = () => {
  const keyPeople = [
    {
      id: 1,
      name: (
        <div className={classes.aboutUs__body__keyPeople__list__item__name}>
          <b>President</b>
          Mr. Ranvijay Sahu
          <br /> (MLA)
        </div>
      ),
      imgUrl: President,
    },
    {
      id: 2,
      name: (
        <div className={classes.aboutUs__body__keyPeople__list__item__name}>
          <b>Vice President</b>
          Mr. Dharmendra Kumar
          <br /> (Advocate)
        </div>
      ),
      imgUrl: DefaultUser,
    },
    {
      id: 3,
      name: (
        <div className={classes.aboutUs__body__keyPeople__list__item__name}>
          <b>Vice President</b>
          Mr. Nitin Abhishek
        </div>
      ),
      imgUrl: DefaultUser,
    },
    {
      id: 4,
      name: (
        <div className={classes.aboutUs__body__keyPeople__list__item__name}>
          <b>Vice President</b>
          Mr. Mahendra Sahu
        </div>
      ),
      imgUrl: DefaultUser,
    },
    {
      id: 5,
      name: (
        <div className={classes.aboutUs__body__keyPeople__list__item__name}>
          <b>Vice President</b>
          Prof. Sanjay Kumar
        </div>
      ),
      imgUrl: DefaultUser,
    },
    {
      id: 6,
      name: (
        <div className={classes.aboutUs__body__keyPeople__list__item__name}>
          <b>Vice President</b>
          Mr. Anil Kumar Akela
        </div>
      ),
      imgUrl: DefaultUser,
    },
    {
      id: 7,
      name: (
        <div className={classes.aboutUs__body__keyPeople__list__item__name}>
          <b>General Secretary</b>
          Mr. Amarendra Kuma
        </div>
      ),
      imgUrl: DefaultUser,
    },
    {
      id: 8,
      name: (
        <div className={classes.aboutUs__body__keyPeople__list__item__name}>
          <b>Treasurer</b>
          Mr. Ranjay Kumar
        </div>
      ),
      imgUrl: DefaultUser,
    },
  ];

  return (
    <div className={classes.aboutUs}>
      <div className={classes.aboutUs__header}>About Us</div>
      <div className={classes.aboutUs__body}>
        <div className={classes.aboutUs__body__description}>
          <b>
            <a href="ShadiRista.com" target="_blank">
              ShadiRista.com
            </a>
          </b>{" "}
          is place to find suitable bride and groom belonging to Bihar Tailik
          Sahu Community.
          <br />
          <br />
          It is completely free and sponsored by founder of Webology.in Mr. G.
          Gaurav (B.tech, M.tech).
          <br />
          <br />
          Our aim is to serve the Tailik Sahu Community by making the difficult
          work of suitable match finding very much streamlined and easier.
        </div>
        <div className={classes.aboutUs__body__keyPeople}>
          <div className={classes.aboutUs__body__keyPeople__heading}>
            Key People
          </div>
          <div className={classes.aboutUs__body__keyPeople__list}>
            {keyPeople.map((user) => {
              return (
                <div
                  className={classes.aboutUs__body__keyPeople__list__item}
                  key={user.id}
                >
                  <CircularImage imgURL={user.imgUrl} height="12" width="12" />
                  {user.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
