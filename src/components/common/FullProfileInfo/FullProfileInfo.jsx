import React from "react";
import classes from "./FullProfileInfo.module.scss";
import PDFIcon from "../../../assets/icons/Profile/PDFIcon";
import moment from "moment";
import Button from "../Button/Button";

const FullProfileInfo = ({ profile, isHeading = true, handleConnect }) => {
  const dateOfBirth =
    profile && new Date(profile?.dateOfBirth).toLocaleDateString();
  const formatDateOfBirth = moment(dateOfBirth).format("DD/MM/YYYY");

  return (
    <div className={classes.fullProfileInfo}>
      {isHeading && (
        <div className={classes.fullProfileInfo__header}>
          Full Profile Information :
          <Button label="Connect" small dark onClick={handleConnect} />
        </div>
      )}
      <div className={classes.fullProfileInfo__infoContainer}>
        <div className={classes.fullProfileInfo__infoContainer__columns}>
          <div
            className={classes.fullProfileInfo__infoContainer__columns__column1}
          >
            <div className={classes.fullProfileInfo__infoContainer__field}>
              <div
                className={
                  classes.fullProfileInfo__infoContainer__field__heading
                }
              >
                Name
              </div>
              <div
                className={classes.fullProfileInfo__infoContainer__field__value}
              >
                {`${profile?.firstName} ${profile?.lastName}`}
              </div>
            </div>
            <div className={classes.fullProfileInfo__infoContainer__field}>
              <div
                className={
                  classes.fullProfileInfo__infoContainer__field__heading
                }
              >
                Date of Birth
              </div>
              <div
                className={classes.fullProfileInfo__infoContainer__field__value}
              >
                {formatDateOfBirth}
              </div>
            </div>
            <div className={classes.fullProfileInfo__infoContainer__field}>
              <div
                className={
                  classes.fullProfileInfo__infoContainer__field__heading
                }
              >
                Occupation
              </div>
              <div
                className={classes.fullProfileInfo__infoContainer__field__value}
              >
                {profile?.occupation}
              </div>
            </div>
            <div className={classes.fullProfileInfo__infoContainer__field}>
              <div
                className={
                  classes.fullProfileInfo__infoContainer__field__heading
                }
              >
                Education
              </div>
              <div
                className={classes.fullProfileInfo__infoContainer__field__value}
              >
                {profile?.education}
              </div>
            </div>
            <div className={classes.fullProfileInfo__infoContainer__field}>
              <div
                className={
                  classes.fullProfileInfo__infoContainer__field__heading
                }
              >
                Preferred Partner Choice
              </div>
              <div
                className={classes.fullProfileInfo__infoContainer__field__value}
              >
                {profile?.preferredPartnerChoice}
              </div>
            </div>
          </div>
          <div
            className={classes.fullProfileInfo__infoContainer__columns__column2}
          >
            <div className={classes.fullProfileInfo__infoContainer__field}>
              <div
                className={
                  classes.fullProfileInfo__infoContainer__field__heading
                }
              >
                Height
              </div>
              <div
                className={classes.fullProfileInfo__infoContainer__field__value}
              >
                {profile?.height}
              </div>
            </div>
            <div className={classes.fullProfileInfo__infoContainer__field}>
              <div
                className={
                  classes.fullProfileInfo__infoContainer__field__heading
                }
              >
                Body Complexion
              </div>
              <div
                className={classes.fullProfileInfo__infoContainer__field__value}
              >
                {profile?.bodyComplexion}
              </div>
            </div>
            <div className={classes.fullProfileInfo__infoContainer__field}>
              <div
                className={
                  classes.fullProfileInfo__infoContainer__field__heading
                }
              >
                Family Members & Relation
              </div>
              <div
                className={classes.fullProfileInfo__infoContainer__field__value}
              >
                {profile?.familyMembersAndRelations?.map((member) => {
                  return (
                    <div
                      key={member?._id}
                      className={
                        classes.fullProfileInfo__infoContainer__field__value
                      }
                    >
                      {`${member?.relation} : ${member?.name}`}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={classes.fullProfileInfo__infoContainer__field}>
              <div
                className={
                  classes.fullProfileInfo__infoContainer__field__heading
                }
              >
                Zodiac Sign
              </div>
              <div
                className={classes.fullProfileInfo__infoContainer__field__value}
              >
                {profile?.zodiacSign}
              </div>
            </div>
          </div>
          <div
            className={classes.fullProfileInfo__infoContainer__columns__column3}
          >
            <div className={classes.fullProfileInfo__infoContainer__field}>
              <div
                className={
                  classes.fullProfileInfo__infoContainer__field__heading
                }
              >
                Present Address
              </div>
              <div
                className={classes.fullProfileInfo__infoContainer__field__value}
              >
                {/* ${
                  profile?.presentAddress?.location
                }, */}
                {`${profile?.presentAddress?.area}, 
                ${"\n"} ${profile?.presentAddress?.state}, ${
                  profile?.presentAddress?.pincode
                }.`}
              </div>
            </div>
            <div className={classes.fullProfileInfo__infoContainer__field}>
              <div
                className={
                  classes.fullProfileInfo__infoContainer__field__heading
                }
              >
                Permanent Address
              </div>
              <div
                className={classes.fullProfileInfo__infoContainer__field__value}
              >
                {/* ${
                  profile?.permanentAddress?.location
                }, */}
                {`${profile?.permanentAddress?.area}, 
                ${"\n"} ${profile?.permanentAddress?.state}, ${
                  profile?.permanentAddress?.pincode
                }.`}
              </div>
            </div>
            <div className={classes.fullProfileInfo__infoContainer__field}>
              <div
                className={
                  classes.fullProfileInfo__infoContainer__field__heading
                }
              >
                Bio-Data File
              </div>
              <div
                className={classes.fullProfileInfo__infoContainer__field__value}
                onClick={() => window.open(profile?.bioData)}
                style={{ cursor: "pointer" }}
              >
                {/* {profile?.bioData} */}
                <PDFIcon />
              </div>
            </div>
            <div className={classes.fullProfileInfo__infoContainer__field}>
              <div
                className={
                  classes.fullProfileInfo__infoContainer__field__heading
                }
              >
                Annual Income
              </div>
              <div
                className={classes.fullProfileInfo__infoContainer__field__value}
              >
                {profile?.annualIncome} Lakhs - Yearly
              </div>
            </div>
          </div>
        </div>
        <div className={classes.fullProfileInfo__infoContainer__field}>
          <div
            className={classes.fullProfileInfo__infoContainer__field__heading}
          >
            Remarks
          </div>
          <div className={classes.fullProfileInfo__infoContainer__field__value}>
            {profile?.remarks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProfileInfo;
