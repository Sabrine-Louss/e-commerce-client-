import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import PanierCard from './PanierCard'
import { createOrder } from '../redux/slices/orderSlice'

const Panier = () => {
    const {products} = useSelector(state=> state.panier)
    console.log(products)
    const dispatch = useDispatch()
  return (
   
    <div>
        {products.map((product)=> <PanierCard product={product}/>)}
        <button onClick={()=> dispatch(createOrder({productList:products}))}>Add all Order</button>
      
    </div>
  )
}

export default Panier
