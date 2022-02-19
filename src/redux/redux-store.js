import {combineReducers, createStore} from "redux";
import productReducer from "./products/product-reducer"



const rootReducers = combineReducers({
    productState:productReducer,
})

const reduxStore = createStore(rootReducers)

export default reduxStore