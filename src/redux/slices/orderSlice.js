import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk("Order", async (data,{rejectWithValue}) => {
 try{
 const res = await axios.post("/user/createorder", data,{
    headers:{
        token:localStorage.getItem("token")
    }
 });
  return res.data;
 }
 catch(error){
  rejectWithValue(error.response.data.msg)
 }
});
const orderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: false,
    error: false,
    orders:[]
  },
  reducers:{
  },
  extraReducers:{
    [createOrder.pending]:(state)=>{state.isLoading=true},
    [createOrder.fulfilled]:(state,action)=>{
        state.error=null
        state.isLoading=false
    },
    [createOrder.rejected]:(state,action)=>{
        state.error=action.payload.error 
    },
   
  }
});

export default orderSlice.reducer;
// export const {logout}=UserSlice.actions
