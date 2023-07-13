import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import classes from "./Blogs.module.scss";

const Blogs = () => {
  const blogsList = [
    {
      id: 0,
      imgList: [
        "https://imagesandbiodata.blob.core.windows.net/images/1683125260677-spring-flowers.jpg?sv=2021-12-02&ss=bfqt&srt=co&sp=rwdlacupiytfx&se=2025-03-04T23:44:23Z&st=2023-05-02T15:44:23Z&spr=https,http&sig=EuLVgd0O2ybWMzCbcDWyB%2Fh7JiwdUwXIuyezc2xAiTo%3D",
        "https://pbs.twimg.com/profile_images/1372507730527711236/RwlROv3S_400x400.jpg",
      ],
      heading: "Exploring the Outdoors",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales ultrices ante, sed lacinia ipsum tempus in. Donec laoreet tellus in massa ullamcorper condimentum. Integer eleifend massa vitae risus interdum, non auctor nulla tempor. Phasellus id ligula semper, placerat velit id, venenatis mi.",
    },
    {
      id: 1,
      imgList: [
        "https://imagesandbiodata.blob.core.windows.net/images/1683126525342-chrome-edge.jpg?sv=2021-12-02&ss=bfqt&srt=co&sp=rwdlacupiytfx&se=2025-03-04T23:44:23Z&st=2023-05-02T15:44:23Z&spr=https,http&sig=EuLVgd0O2ybWMzCbcDWyB%2Fh7JiwdUwXIuyezc2xAiTo%3D",
      ],
      heading: "Delicious Recipes for Summer",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod feugiat lectus, sit amet iaculis orci fringilla ac. Nulla sed semper odio. Sed at commodo purus. Duis ac urna at lacus fringilla bibendum vitae ut erat. Sed condimentum, sem nec cursus euismod, massa dolor suscipit libero, sed laoreet massa nibh vitae nisl.",
    },
    {
      id: 2,
      imgList: [
        "https://imagesandbiodata.blob.core.windows.net/images/1683125260677-spring-flowers.jpg?sv=2021-12-02&ss=bfqt&srt=co&sp=rwdlacupiytfx&se=2025-03-04T23:44:23Z&st=2023-05-02T15:44:23Z&spr=https,http&sig=EuLVgd0O2ybWMzCbcDWyB%2Fh7JiwdUwXIuyezc2xAiTo%3D",
        "https://imagesandbiodata.blob.core.windows.net/images/1683125260677-spring-flowers.jpg?sv=2021-12-02&ss=bfqt&srt=co&sp=rwdlacupiytfx&se=2025-03-04T23:44:23Z&st=2023-05-02T15:44:23Z&spr=https,http&sig=EuLVgd0O2ybWMzCbcDWyB%2Fh7JiwdUwXIuyezc2xAiTo%3D",
        "https://imagesandbiodata.blob.core.windows.net/images/1683125260677-spring-flowers.jpg?sv=2021-12-02&ss=bfqt&srt=co&sp=rwdlacupiytfx&se=2025-03-04T23:44:23Z&st=2023-05-02T15:44:23Z&spr=https,http&sig=EuLVgd0O2ybWMzCbcDWyB%2Fh7JiwdUwXIuyezc2xAiTo%3D",
      ],
      heading: "Tips for a Productive Workday",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus felis vel odio viverra fermentum. Mauris a metus efficitur, maximus felis nec, tincidunt ligula. Nullam a justo vitae sem ultricies efficitur. Fusce gravida metus et neque volutpat, sit amet scelerisque tortor tincidunt. Nulla malesuada sem id tellus blandit tincidunt.",
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
