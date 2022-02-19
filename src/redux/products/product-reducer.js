import { v4 as uuidv4} from "uuid"
import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, EDIT_PRODUCT_COST, EDIT_PRODUCT_NAME} from "./action-types";

const initialState = {
    products:[]
}

const productReducer = (state= initialState,action)=>{
    switch(action.type){
        case ADD_PRODUCT :
            const productObject = {
                id:uuidv4(),
                name:action.newName,
                cost:action.newCost,
                img:action.img,
                gaming:action.gaming
            }
            return {
                ...state,
                products:[...state.products,productObject]
            }
        case EDIT_PRODUCT_NAME :
            return{
                ...state,
                products:state.products.map(item => {
                    if(item.id === action.id){
                        return {
                            ...item,
                            name: action.newValue
                        }
                    }else{
                        return item
                    }
                })
            }
        case EDIT_PRODUCT_COST :
            return{
                ...state,
                products:state.products.map(item => {
                    if(item.id === action.id){
                        return {
                            ...item,
                            cost: action.newValue
                        }
                    }else{
                        return item
                    }
                })
            }
        case DELETE_PRODUCT :
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.id)
            }
        default : return state
    }
}

export default productReducer