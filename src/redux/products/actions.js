import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, EDIT_PRODUCT_COST, EDIT_PRODUCT_NAME} from "./action-types";


export const setAddProduct = (newName,newCost,img,gaming)=>({type:ADD_PRODUCT,newName,newCost,img,gaming})
export const setDeleteProduct = (id)=>({type:DELETE_PRODUCT,id})
export const setEditProductName = (id,newValue) =>({type:EDIT_PRODUCT_NAME,id,newValue})
export const setEditProductCost = (id,newValue) =>({type:EDIT_PRODUCT_COST,id,newValue})

