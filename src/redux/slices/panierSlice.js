import { createSlice } from "@reduxjs/toolkit";


const panierSlice = createSlice({
  name: "panier",
  initialState: {
    isLoading: false,
    error: false,
    products:[]
  },
  reducers:{
    addProductPanier:(state,action)=>{
        state.products=[...state.products,action.payload]
        // console.log("Payload:", action.payload);
    }
  },

});

export default panierSlice.reducer;
export const {addProductPanier}=panierSlice.actions
