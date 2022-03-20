import { SET_CATEGORY } from "../../contants/action-type";
const initialState = {
  categoryList: [],
};
export const cattegoryListReducers = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_CATEGORY:
      return { ...state, categoryList: payload };

    default:
      return state;
  }
};
