
import { PRODUCTDATA } from "../Action/Product";
// import { Product } from "../Action/Product";

const initStore = {
    pdata : []
}
export const ProductReducer = (store = initStore, action) => {
    switch(action.type) {
        case PRODUCTDATA :
            return {...store, pdata: action.payload}

            default:
                return store
    }
}