import React from 'react'
import { useDispatch } from 'react-redux'
import { addProductPanier } from '../redux/slices/panierSlice'

const ProductCard = ({product}) => {
    const dispatch= useDispatch()
  return (
    <div>
        <img src={product.poster} alt='img' width="30%"/>
        <h3>{product.title}</h3>
        <h3>{product.description}</h3>
        <h3>{product.price}</h3>
        
      <button onClick={()=> dispatch(addProductPanier(product))}>Add to card</button>
    </div>
  )
}

export default ProductCard
