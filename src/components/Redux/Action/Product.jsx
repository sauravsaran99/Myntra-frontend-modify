import axios from "axios";

export const PRODUCTDATA = "PRODUCTDATA";

export const Product = (payload) => {
  return { type: PRODUCTDATA, payload };
};

export const Productthunk = () => {
  return (dispatch) => {
    axios.get("https://myntraclone2222.herokuapp.com/products").then((res) => {
      return dispatch(Product(res.data));
    });
  };
};
