import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProduct = createAsyncThunk("Product", async (data,{rejectWithValue}) => {
 try{
 const res = await axios.get("/user/getproduct", data);
  return res.data;
 }
 catch(error){
  rejectWithValue(error.response.data.msg)
 }
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    error: false,
    products:[]
  },
  reducers:{
  },
  extraReducers:{
    [GetProduct.pending]:(state)=>{state.isLoading=true},
    [GetProduct.fulfilled]:(state,action)=>{
        state.products= action.payload.products
        state.error=null
        state.isLoading=false
    },
    [GetProduct.rejected]:(state,action)=>{
        state.error=action.payload.error 
    },
   
  }
});

export default productSlice.reducer;
// export const {logout}=UserSlice.actions
