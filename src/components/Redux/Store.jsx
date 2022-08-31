
import { ProductReducer } from "./Reducers/ProductReducer";
import { Cartreducer } from "./Reducers/Cartreducer";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
    product: ProductReducer,
    cart: Cartreducer
})

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk))