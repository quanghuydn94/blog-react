import { CardMedia, Grid, Typography, Box } from "@material-ui/core";
import React, { useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchFashionPosts,
  fetchFoodPosts,
  fetchPosts,
} from "../../redux/actions/blog";
import { PostFoods } from "./PostFoods";
import { PostItem } from "./PostItem";
import Post from "./Post";
import "./HomePage.scss";

export const HomePage = () => {
  useLayoutEffect(() => {
    dispatch(fetchFoodPosts());
    dispatch(fetchPosts());
    dispatch(fetchFashionPosts());
    document.title = "Blog Live's Matter";
  }, []);

  const fashionPosts = useSelector((state) => state.blogs.fashionPosts);
  const travelPosts = useSelector((state) => state.blogs.travelPosts);
  const foodPosts = useSelector((state) => state.blogs.foodPosts);
  const fashionCol1 = fashionPosts.slice(0, 2);
  const fashionCol2 = fashionPosts.slice(2, 4);
  const dispatch = useDispatch();
  return (
    <>
      <Grid container justifyContent="center" className="containerHome">
        <Grid item sm={12} xs={12}>
          <CardMedia
            component="div"
            className="cardMedia"
            image="https://cdn.pixabay.com/photo/2022/01/08/14/09/mont-saint-michel-6924072_960_720.jpg"
          >
            <Typography className="title1" component="span">
              Welcome in
            </Typography>
            <Typography className="title2" component="span">
              Join with us
            </Typography>
          </CardMedia>
        </Grid>
        <Grid item sm={12} xs={12}>
          <Box>
            <Box className="titlePost">
              <Typography variant="h2">Foods</Typography>
              <Typography variant="h2">Foods</Typography>
            </Box>
            <div className="rowOne  ">
              {foodPosts.map((post) => (
                <div className={post ? `col${post.id}` : ""} key={post.id}>
                  <PostFoods post={post} />
                </div>
              ))}
            </div>
          </Box>
          <Box>
            <Box className="titlePost">
              <Typography variant="h2">Fashions</Typography>
              <Typography variant="h2">Fashions</Typography>
            </Box>
            <Grid container justifyContent="space-between" spacing={5}>
              <Grid item sm={6} xs={12}>
                <PostItem fashions={fashionCol1} />
              </Grid>
              <Grid item sm={6} xs={12}>
                <PostItem fashions={fashionCol2} />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Box className="titlePost">
              <Typography variant="h2">Travels</Typography>
              <Typography variant="h2">Travels</Typography>
            </Box>
            <div>
              {travelPosts &&
                travelPosts.map((post) => (
                  <div key={post.id}>
                    <Post post={post} />
                  </div>
                ))}
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
