import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery){
    return async(dispatch, getState)=>{
        let url= `https://my-json-server.typicode.com/hyun-june/React-Geonworks-store/products?q=${searchQuery}`;
        let response = await fetch(url)
        let data = await response.json();
        // dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}})
        dispatch(productActions.getAllproduct({data}))
    }
}

function getProductDetail(id){
    return async(dispatch) =>{
        let url = `https://my-json-server.typicode.com/hyun-june/React-Geonworks-store/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        // dispatch({type:"GET_DETAIL",payload:{data}})
        dispatch(productActions.getDetailproduct({data}))   
    }
}

export const productAction={getProducts ,getProductDetail};