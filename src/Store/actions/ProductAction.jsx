import axios from "axios"
import { getproducts } from "../reducers/ProductSlice"

 export  const FetchProducts= ()=> async (dispatch,getstate)=>{
    try{
            const response= await  axios.get("https://fakestoreapi.com/products")
           dispatch(getproducts(response.data))
    }
    catch (error) {
         console.log(error)
    }
    
}