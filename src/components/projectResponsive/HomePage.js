import { CardMedia, Grid, Typography, Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFashionPosts, fetchPosts } from "../../redux/actions/blog";
import { News } from "./PostFoods";
import { PostItem } from "./PostItem";
import "./HomePage.scss";
import Post from "./Post";

export const HomePage = () => {
  const fashionPosts = useSelector((state) => state.blogs.fashionPosts);
  const travelPosts = useSelector((state) => state.blogs.travelPosts);
  const fashionCol1 = fashionPosts.slice(0, 2);
  const fashionCol2 = fashionPosts.slice(2, 4);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchFashionPosts());
    document.title = "Blog Live's Matter";
  }, []);
  return (
    <>
      <Grid container justifyContent="center" className="container">
        <Grid item sm={12} xs={10}>
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
        <Grid item sm={12} xs={9}>
          <Box>
            <Box className="titlePost">
              <Typography variant="h2">Foods?</Typography>
              <Typography variant="h2">Foods?</Typography>
            </Box>
            <div className="rowOne  ">
              <div className="colOne">
                <News />
              </div>
              <div className="colTwo">
                <News />
              </div>
              <div className="colThree">
                <News />
              </div>
              <div className="colFour">
                <News />
              </div>
            </div>
          </Box>
          <Box>
            <Box className="titlePost">
              <Typography variant="h2">Fashions?</Typography>
              <Typography variant="h2">Fashions?</Typography>
            </Box>
            <Grid container justifyContent="space-between" spacing={5}>
              <Grid item sm={6}>
                <PostItem fashions={fashionCol1} />
              </Grid>
              <Grid item sm={6}>
                <PostItem fashions={fashionCol2} />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Box className="titlePost">
              <Typography variant="h2">Travels?</Typography>
              <Typography variant="h2">Travels?</Typography>
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
