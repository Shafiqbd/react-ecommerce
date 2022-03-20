import { SET_CATEGORY } from "../../contants/action-type";
export const setCategory = (categorys) => {
  return {
    type: SET_CATEGORY,
    payload: categorys,
  };
};
