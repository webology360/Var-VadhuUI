import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import classes from "./Blogs.module.scss";
import Blog1 from "../../assets/BlobContent/Blog1";
import Blog2 from "../../assets/BlobContent/Blog2";
import Blog3 from "../../assets/BlobContent/Blog3";

const Blogs = () => {
  const blogsList = [
    {
      id: 0,
      imgList: [
        "https://imagesandbiodata.blob.core.windows.net/publicimages/Navigating_Online_Matrimonial_Platforms.jpg",
        "https://pbs.twimg.com/profile_images/1372507730527711236/RwlROv3S_400x400.jpg",
      ],
      heading: "Navigating Online Matrimonial Platforms: A Guide to Finding Your Perfect Match",
      body: <Blog1/>   },
    {
      id: 1,
      imgList: [
        "https://imagesandbiodata.blob.core.windows.net/publicimages/_b8b59556-9ff0-467c-bba3-bae899b414cb.jpg",
      ],
      heading: "The Changing Landscape of Marriage: Embracing Modern Relationship Dynamics",
      body: <Blog2/>,
    },
    {
      id: 2,
      imgList: [
        "https://imagesandbiodata.blob.core.windows.net/publicimages/discussion.jpg",
        "https://imagesandbiodata.blob.core.windows.net/images/1683125260677-spring-flowers.jpg?sv=2021-12-02&ss=bfqt&srt=co&sp=rwdlacupiytfx&se=2025-03-04T23:44:23Z&st=2023-05-02T15:44:23Z&spr=https,http&sig=EuLVgd0O2ybWMzCbcDWyB%2Fh7JiwdUwXIuyezc2xAiTo%3D",
        "https://imagesandbiodata.blob.core.windows.net/images/1683125260677-spring-flowers.jpg?sv=2021-12-02&ss=bfqt&srt=co&sp=rwdlacupiytfx&se=2025-03-04T23:44:23Z&st=2023-05-02T15:44:23Z&spr=https,http&sig=EuLVgd0O2ybWMzCbcDWyB%2Fh7JiwdUwXIuyezc2xAiTo%3D",
      ],
      heading: "Pre-Marital Counseling: Why It Matters and How It Can Benefit Your Marriage",
      body: <Blog3/>
    },
  ];

  return (
    <div className={classes.blogs}>
      {blogsList?.map((blogItem, index) => {
        return (
          <BlogItem key={blogItem?.id} blogItem={blogItem} index={index} />
        );
      })}
    </div>
  );
};

export default Blogs;
