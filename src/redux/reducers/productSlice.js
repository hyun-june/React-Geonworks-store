import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState={
    productlist:[],
    selectedItem:null,
    isLoading:false,
    error:null,
};
export const fetchProducts = createAsyncThunk('product/fetchAll',async(searchQuery,thunkApi)=>{
    try{
        let url= `https://my-json-server.typicode.com/hyun-june/React-Geonworks-store/products?q=${searchQuery}`;
        let response = await fetch(url)
        return await response.json(); 
    }
    catch(error){
        return thunkApi.rejectWithValue(error.message);
    }
})

export const fetchProductDetail = createAsyncThunk('product/fetchDetail',async(id,thunkApi)=>{
    try{
        let url = `https://my-json-server.typicode.com/hyun-june/React-Geonworks-store/products/${id}`;
        let response = await fetch(url);
        return await response.json();
    } catch(error){
        return thunkApi.rejectWithValue(error.message);
    }
})

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.isLoading=true;
        }) .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.productlist=action.payload;
        }) .addCase(fetchProducts.rejected,(state, action)=>{
            state.isLoading=false;
            state.error=action.payload;
        }) .addCase(fetchProductDetail.pending,(state)=>{
            state.isLoading=true;
        }).addCase(fetchProductDetail.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.selectedItem = action.payload;
        }) .addCase(fetchProductDetail.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
    }
});

console.log(productSlice)

export const productActions = productSlice.actions;
export default productSlice.reducer;

// function productSlice(state=initialState,action){
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


// export default productSlice;
