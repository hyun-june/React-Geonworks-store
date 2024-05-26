let initialState={
    productlist:[],
    selectedItem:null
};

function productReducer(state=initialState,action){
    let{type,payload} = action;
    switch(type){
        case "GET_PRODUCT_SUCCESS":
            return{...state, productlist:payload.data};
        case "GET_DETAIL":
            return{...state,selectedItem:payload.data};
        default:
                return{...state};
    }
}


export default productReducer;