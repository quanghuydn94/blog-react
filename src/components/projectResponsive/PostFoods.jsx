import {
  Card,
  CardMedia,
  Typography,
  Button,
  CardContent,
} from "@material-ui/core";
import React from "react";
import "./PostFoods.scss";

export const News = () => {
  return (
    <>
      <Card className="newsCard">
        <CardMedia
          className="newsImage"
          image="https://images.pexels.com/photos/7263015/pexels-photo-7263015.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="My Post"
        >
          <CardContent className="newsContent">
            <Typography gutterBottom variant="h5">
              What is Lorem Ipsum?
            </Typography>
            <Typography variant="body2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </CardContent>
          <Button size="small" color="primary">
            Read more
          </Button>
        </CardMedia>
      </Card>
    </>
  );
};
