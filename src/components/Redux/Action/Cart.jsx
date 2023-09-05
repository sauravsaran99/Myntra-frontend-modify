
import axios from "axios";

export const CART_DATA = "CART_DATA";

export const cartData = (payload) => {
    return {type: CART_DATA, payload}
}

export const Cartthunk = (id) => {
    return (dispatch) => {
        axios.get(`https://myntra-backend-2.onrender.com/cart`).then((res) => {
            console.log(res.data, 'res')
            console.log('id2',id)
            res.data = res.data.filter((e) => e.userid === id)
            return dispatch(cartData(res.data));
        })
    }
}

