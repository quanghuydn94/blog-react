import { Box, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import Feed from "./Feed";
import "./Blog.scss";
import { PostItem } from "./PostItem";
import { useDispatch } from "react-redux";
import { fetchFashionPosts, fetchPosts } from "../../redux/actions/blog";
import { useSelector } from "react-redux";

export const Blog = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.blogs.travelPosts);
  const fashionPosts = useSelector((state) => state.blogs.fashionPosts);
  const fashionCol1 = fashionPosts.slice(0, 2);
  const fashionCol2 = fashionPosts.slice(2, 4);
  const fashionCol3 = fashionPosts.slice(4);
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchFashionPosts());
    document.title = "Blog";
  }, []);
  return (
    <div className="container">
      <Grid container justifyContent="center">
        <Grid item sm={12} xs={9}>
          <Box className="divider">
            <Typography>Travels</Typography>
          </Box>
          <Feed posts={data} />
          <Box className="divider">
            <Typography>Fashion</Typography>
          </Box>
          <Grid container justifyContent="space-between">
            <Grid item sm={4}>
              <PostItem fashions={fashionCol1} />
            </Grid>
            <Grid item sm={3}>
              <PostItem fashions={fashionCol2} />
            </Grid>
            <Grid item sm={4}>
              <PostItem fashions={fashionCol3} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
