import { Box, Button, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailBlogFashion.scss";
import foods from "../../redux/contants/dataFoods";

export const DetailBlogFood = () => {
  const [post, setPost] = useState("");
  const params = useParams();
  useEffect(() => {
    const data = foods[params.id - 1];
    setPost(data);
    document.title = `Foods - ${post.title}`;
  });
  return (
    <Box className="containerFashion">
      {post && (
        <>
          <Box className="detailTitle">
            <Typography component="span">
              <img src={post.url.img1} alt="" />
              <strong>Fashion</strong>
              {post.date}
            </Typography>
            <Typography variant="h3" gutterBottom>
              {post ? post.title : ""}
            </Typography>
            <Typography>
              Porter proudly presents the new hotel website template called
              Berlin.
            </Typography>
          </Box>
          <Box className="detailContent">
            <Typography variant="body1">
              {post ? post.body : ""}
              Porter proudly presents the new hotel website template called
              Berlin. A city with so much history and culture that we thought it
              deserves its own website template. Step into a world of freedom
              and life in the fast lane. In the Berlin template there is ample
              space for high quality images that give a tempting impression of
              the hotel and entices future hotel guests to make a reservation.
            </Typography>
            <Box component="div" className="boxImage">
              <img src={post.url.img2} />
            </Box>
            <Typography variant="body1">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </Typography>
            <Box component="div" className="boxImage">
              <img src={post.url.img1} />
              <img src={post.url.img3} />
            </Box>
            <Typography variant="body1">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </Typography>
          </Box>
        </>
      )}
      <Button>
        <Link to="/blogs">
          <ArrowBack />
        </Link>
      </Button>
    </Box>
  );
};
