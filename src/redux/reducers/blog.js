import { ActionTypes } from "../contants/action-types";

const initialState = {
  travelPosts: [],
  loading: false,
  error: null,
  fashionPosts: [],
  post: {},
  foodPosts: [],
};
export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
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
      return { ...state };
    case ActionTypes.FETCH_FASHION_POSTS:
      return {
        ...state,
        fashionPosts: action.payload,
      };
    case ActionTypes.FETCH_FASHION_POST:
      let fashionPosts = state.fashionPosts;
      fashionPosts = fashionPosts.filter(
        (fashion) => fashion.id === action.payload
      );
      return {
        ...state,
        post: fashionPosts,
      };
    case ActionTypes.FETCH_FOOD_POSTS:
      return {
        ...state,
        foodPosts: action.payload,
      };
    case ActionTypes.FETCH_FOOD_POST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
