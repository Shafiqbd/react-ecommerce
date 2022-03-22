import { getAllCategory } from "../../../utils/api";
import { SET_CATEGORY } from "../../contants/action-type";

export const setCategoryList = () => async (dispatch) => {
  const categorys = await getAllCategory();
  dispatch({
    type: SET_CATEGORY,
    payload: categorys,
  });
};
