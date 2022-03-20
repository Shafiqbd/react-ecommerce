import { ActionType } from "../../contants/action-type";
export const setCategory = (categorys) => {
  return {
    type: ActionType.SET_CATEGORY,
    payload: categorys,
  };
};
