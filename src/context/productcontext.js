import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://luzesole-api.onrender.com/api/products";

const initialState = {
    isLoading:false,
    isError: false,
    products:[],
    isSingleLoading: false,
    singleProduct:{},


}

const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);

const getProducts = async (url)=>{
    dispatch({type:"SET_LOADING"});
    try {
        const res = await axios.get(url);
        // console.log(res);
        const products = await res.data.data;
        // console.log(products);
        dispatch({type:"SET_API_DATA",payload: products});
        
    } catch (error) {
        // console.log(error);
        dispatch({type:"API_ERROR"});
    }
};


    const getSingleProduct = async(url) =>{
        dispatch({type:"SET_SINGLE_LOADING"});
        try {
            const res = await axios.get(url);
            const singleProducts = await res.data.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload: singleProducts});
        } catch (error) {
            dispatch({type:"API_SINGLE_ERROR"});
        }
    }

    useEffect(()=>{
        getProducts(API);
    },[]);

    return <AppContext.Provider value={{...state,getSingleProduct}}>
        {children}
    </AppContext.Provider>
};

const useProductContext=() =>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useProductContext};