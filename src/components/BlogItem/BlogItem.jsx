import React from "react";
import classes from "./BlogItem.module.scss";
import ImageList from "../common/ImageList/ImageList";

const BlogItem = ({ blogItem, index }) => {
  return (
    <div
      className={classes.blogItem}
      style={{ direction: index % 2 === 0 ? "ltr" : "rtl" }}
    >
      {/* <ImageList
        images={blogItem?.imgList}
        activeImageHeight="45"
        activeImageWidth="45"
      /> */}
      <img
        src={blogItem?.imgList[0]}
        className={classes.blogItem__img}
        alt="blog"
      />
      <div className={classes.blogItem__contentContainer}>
        <h1>{blogItem?.heading}</h1>
        <div className={classes.blogItem__contentContainer__body}>
          {blogItem?.body}
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
