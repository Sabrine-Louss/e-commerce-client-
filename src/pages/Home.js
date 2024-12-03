import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProduct } from '../redux/slices/productSlice'
import ProductList from '../components/ProductList'
import Panier from '../components/Panier'

const Home = () => {
  const {products, isLoading,error}= useSelector(state=> state.products)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetProduct())
  },[dispatch])
  return (
    <div>
      {isLoading && <h1> isLoading</h1>}
      <ProductList products={products}/>
    {  console.log(error)}
    <Panier/>
    </div>
  )
}

export default Home
