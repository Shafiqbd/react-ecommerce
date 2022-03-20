import { ActionType } from "../../contants/action-type";
const initialState = {
  categoryList: [],
};
export const cattegoryListReducers = (state = initialState, { payload, type }) => {
  switch (type) {
    case ActionType.SET_CATEGORY:
      return { ...state, categoryList: payload };

    default:
      return state;
  }
};
