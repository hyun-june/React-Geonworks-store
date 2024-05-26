import { createSlice } from "@reduxjs/toolkit";

let initialState={
    productlist:[],
    selectedItem:null
};

// function productReducer(state=initialState,action){
//     let{type,payload} = action;
//     switch(type){
//         case "GET_PRODUCT_SUCCESS":
//             return{...state, productlist:payload.data};
//         case "GET_DETAIL":
//             return{...state,selectedItem:payload.data};
//         default:
//                 return{...state};
//     }
// }


// export default productReducer;

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers: {
       getAllproduct(state,action){
        state.productlist=action.payload.data;
       },
       getDetailproduct(state,action){
        state.selectedItem=action.payload.data;
       } 
    }
});

console.log(productSlice)

export const productActions = productSlice.actions;
export default productSlice.reducer;
