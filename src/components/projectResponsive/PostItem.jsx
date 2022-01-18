import { Box, Button, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { aFashionPost } from "../../redux/actions/blog";
import "./PostItem.scss";

export const PostItem = ({ fashions }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleFashionPost = (id) => {
    dispatch(aFashionPost(id));
    history(`/blogs/fashions/${id}`);
  };
  return (
    <>
      {fashions.map((fashion) => (
        <Box className="postItem" key={fashion.id}>
          <Box className="boxImage">
            <Box className="postItemImage">
              <img src={fashion.url} />
            </Box>
          </Box>
          <Box className="postItemContent">
            <Typography variant="h6">{fashion.title}</Typography>
            <Typography variant="body2">{fashion.body}</Typography>
            <Button onClick={() => handleFashionPost(fashion.id)}>
              Read <ChevronRightIcon fontSize="small" />
            </Button>
          </Box>
        </Box>
      ))}
    </>
  );
};
