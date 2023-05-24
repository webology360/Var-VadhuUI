import React, { useEffect, useState } from "react";
import CircularImage from "../CircularImage/CircularImage";
import classes from "./ImageList.module.scss";

const ImageList = ({
  images,
  activeImageType = "default",
  activeImageHeight = "42.2",
  activeImageWidth = "41.5",
}) => {
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (images?.length > 0) {
      setActiveImage(images[0]);
    }
  }, [images]);

  const handleActiveImg = (index) => {
    setActiveImage(images[index]);
  };
  return (
    <div className={classes.imageList}>
      <div className={classes.imageList__activeImgContainer}>
        {activeImageType === "circular" ? (
          <CircularImage
            imgURL={activeImage}
            isActive={true}
            height={activeImageHeight}
            width={activeImageWidth}
          />
        ) : (
          <img
            src={activeImage}
            className={classes.imageList__activeImgContainer__img}
            style={{
              width: `${activeImageWidth}rem`,
              height: `${activeImageHeight}rem`,
            }}
            alt="profile"
          />
        )}
      </div>
      <div className={classes.imageList__imgListContainer}>
        {images?.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              className={classes.imageList__imgListContainer__img}
              style={{
                borderWidth: activeImage === image ? "0.2rem" : "0rem",
              }}
              alt={`profile ${index + 1}`}
              onClick={() => handleActiveImg(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageList;
