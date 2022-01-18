import { Box, Button, CardMedia, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSinglePost } from "../../redux/actions/blog";
import "./Post.scss";

const Post = ({ post }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleDetail = () => {
    dispatch(fetchSinglePost(post));
    history(`/blogs/travels/${post.id}`);
  };
  return (
    <Box className="postCard">
      <Box className="image">
        <CardMedia className="cardImage" image={post.url} title={post.title} />
      </Box>
      <Box className="cardContent">
        <Typography gutterBottom variant="h5">
          {post.title}
        </Typography>
        <Typography variant="body2">{post.body}</Typography>
        <Button
          onClick={() => handleDetail(post.id)}
          size="small"
          color="primary"
        >
          Read more
        </Button>
      </Box>
    </Box>
  );
};
export default Post;
