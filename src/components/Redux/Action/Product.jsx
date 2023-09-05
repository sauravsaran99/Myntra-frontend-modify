import axios from "axios";

export const PRODUCTDATA = "PRODUCTDATA";

export const Product = (payload) => {
  return { type: PRODUCTDATA, payload };
};

export const Productthunk = () => {
  return (dispatch) => {
    axios.get("https://myntra-backend-2.onrender.com/products").then((res) => {
      console.log('live', res.data)
      return dispatch(Product(res.data));
    });
  };
};
