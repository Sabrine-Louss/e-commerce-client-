import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./slices/userSlice"
import ProductSlice from "./slices/productSlice"
import panierSlice from "./slices/panierSlice"


export default configureStore({reducer:{user:userSlice, products:ProductSlice, panier:panierSlice}})