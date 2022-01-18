import { Box, Button, Typography } from "@material-ui/core";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./DetailBlog.scss";

const images = [
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_960_720.jpg",
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_960_720.jpg",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/9049368/pexels-photo-9049368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/9783678/pexels-photo-9783678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/10564588/pexels-photo-10564588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const DetailBlogTravel = () => {
  const post = useSelector((state) => state.blogs.post);
  useLayoutEffect(() => {
    document.title = `Fashion - ${post[0].title}`;
  });
  return (
    <Box className="containerDetail">
      <Box className="detailTitle">
        <Typography>December 8th, 2020</Typography>
        <Typography variant="h3" gutterBottom>
          {post ? post[0].title : ""}
        </Typography>
      </Box>
      <Box className="detailContent">
        <Typography variant="body1">
          {post ? post[0].body : ""}
          Porter proudly presents the new hotel website template called Berlin.
          A city with so much history and culture that we thought it deserves
          its own website template. Step into a world of freedom and life in the
          fast lane. In the Berlin template there is ample space for high
          quality images that give a tempting impression of the hotel and
          entices future hotel guests to make a reservation.
        </Typography>
        <img src={images[0].url} />
        <Typography variant="body1">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Typography>
        <img src={images[1].url} />
        <Typography variant="body1">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </Typography>

        <Button>
          <Link to="/blogs">Go Back</Link>
        </Button>
      </Box>
    </Box>
  );
};
