import axios from "axios";
import { categoryListFunc, productListFunc } from "../redux/MainReducer";

export const getCategoryList = () => async (dispatch) => {
  return await axios
    .get("https://techlead.pythonanywhere.com/api/categories")
    .then((resp) => {
      console.log(resp.data);
      dispatch(categoryListFunc(resp.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProductList = () => async (dispatch) => {
  return await axios
    .get("https://techlead.pythonanywhere.com/api/product-list/")
    .then((resp) => {
      console.log(resp.data);
      dispatch(productListFunc(resp.data))
    })
    .catch((err) => {
      console.log(err);
    });
};
