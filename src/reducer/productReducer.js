const ProductReducer = ( state,action) =>{
    // if(action.type === "SET_LOADING"){

    //     return{
    //         ...state,
    //         isLoading:true,
    //     };

    // }
    // if(action.type === "API_ERROR"){

    //     return{
    //         ...state,
    //         isLoading:false,
    //         isError : true,
    //     };

    // }

    switch (action.type) {
        case "SET_LOADING":
            return{
                        ...state,
                        isLoading:true,
                    };
        case "SET_API_DATA":
            

            return{
                ...state,
                isLoading:false,
                products:action.payload,
            };

        case "API_ERROR" :
            return{
                ...state,
            isLoading:false,
            isError : true,
            };

        case "SET_SINGLE_LOADING":
            return{
                ...state,
            isSingleLoading:true,
           };

        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
            isSingleLoading:false,
            singleProduct:action.payload,
           };
            
        case "API_SINGLE_ERROR":
            return{
                ...state,
            isSingleLoading:false,
            isError : true,
            };
            
        default:
            return state;
    }

}

export default ProductReducer;