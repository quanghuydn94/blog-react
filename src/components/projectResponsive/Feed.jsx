import { Box, Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingRight: 0,
    paddingLeft: 0,
  },
}));
const Feed = ({ posts }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box>
        {posts.map((post, index) => (
          <div key={index} className="">
            <Post post={post} />
          </div>
        ))}
      </Box>
    </Container>
  );
};
export default Feed;
