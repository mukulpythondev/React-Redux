import { createSlice } from "@reduxjs/toolkit";
const initialState={
    products:[]
}
export const ProductReducer=createSlice({
    name:"products",
    initialState,
    reducers:{
        getproducts: (state,action)=>{
            state.products= action.payload
        //    state.products=action.payload
        }
    }

})
export const {getproducts}= ProductReducer.actions
export default ProductReducer.reducer
