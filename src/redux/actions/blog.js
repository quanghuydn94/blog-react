import { ActionTypes } from "../contants/action-types";
import fashions from "../contants/dataFashion";
import travels from "../contants/dataTravels";

export const fetchPosts = () => (dispatch) => {
  dispatch({
    type: ActionTypes.FETCH_POSTS_REQUEST,
  });
  try {
    dispatch({
      type: ActionTypes.FETCH_POSTS_SUCCESS,
      payload: travels,
    });
  } catch (error) {
    dispatch({ type: ActionTypes.FETCH_POSTS_ERROR, error: error });
  }
};

export const fetchSinglePost = (post) => {
  return {
    type: ActionTypes.GET_DETAIL_POST,
    payload: post,
  };
};

export const fetchFashionPosts = () => {
  return { type: ActionTypes.FETCH_FASHION_POSTS, payload: fashions };
};

export const aFashionPost = (id) => {
  return {
    type: ActionTypes.FETCH_FASHION_POST,
    payload: id,
  };
};
