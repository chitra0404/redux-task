export const INCREASE_QUANTITY=" INCREASE_QUANTITY ";
export const DECREASE_QUANTITY=" DECREASE_QUANTITY";
export const UPDATE_AMOUNT="  UPDATE_AMOUNT ";
export const ADD_TO_CART=" ADD_TO_CART";
export const REMOVE_CART=" REMOVE_CART";


export const increase_quantity=()=>({type:INCREASE_QUANTITY});
export const decrease_quantity=()=>({type:DECREASE_QUANTITY});
export const updateamount=(amount)=>({type:UPDATE_AMOUNT,payload:amount});
export const addtocart=(id)=>({type:ADD_TO_CART,payload:id});
export const removecart=(id)=>({type:REMOVE_CART,payload:id});

