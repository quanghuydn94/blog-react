import { ActionTypes } from "../contants/action-types";

const initialState = {
  travelPosts: [],
  loading: false,
  error: null,
  fashionPosts: [],
  post: {},
};
export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS:
      return {
        ...state,
        travelPosts: action.payload,
      };
    case ActionTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        travelPosts: action.payload,
      };
    case ActionTypes.FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionTypes.GET_DETAIL_POST:
      let travelPosts = state.travelPosts;
      travelPosts = travelPosts.filter((post) => post.id === action.payload.id);
      return { ...state, post: travelPosts };
    case ActionTypes.FETCH_FASHION_POSTS:
      return {
        ...state,
        fashionPosts: action.payload,
      };
    case ActionTypes.FETCH_FASHION_POST:
      let fashionPosts = state.fashionPosts;
      fashionPosts = fashionPosts.filter((post) => post.id === action.payload);
      return {
        ...state,
        post: fashionPosts,
      };
    default:
      return state;
  }
};
