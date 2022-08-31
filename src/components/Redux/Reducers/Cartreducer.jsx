
import { CART_DATA } from "../Action/Cart";

const initStore = {
    cart: []
}

export const Cartreducer = (store = initStore, action) => {
    switch(action.type) {
        case CART_DATA:
            return {...store, cart: action.payload}

        default:
            return store
    }
}