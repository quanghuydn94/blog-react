import {
  Card,
  CardMedia,
  Typography,
  Button,
  CardContent,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { aFoodPost } from "../../redux/actions/blog";
import "./PostFoods.scss";

export const PostFoods = ({ post }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const detailFood = (id) => {
    dispatch(aFoodPost(id));
    history(`/blogs/foods/${id}`);
  };
  return (
    <>
      <Card className="newsCard">
        <CardMedia className="newsImage" image={post.url.img3} title="My Post">
          <CardContent className="newsContent">
            <Typography gutterBottom variant="h5">
              {post.title}
            </Typography>
            <Typography variant="body2">{post.body}</Typography>
          </CardContent>
          <Button
            size="small"
            color="primary"
            onClick={() => detailFood(post.id)}
          >
            Read more
          </Button>
        </CardMedia>
      </Card>
    </>
  );
};
