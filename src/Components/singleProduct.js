import React from 'react'
import { useParams} from 'react-router-dom'
function ProductDetails() {
  const params = useParams();
  const ProductId=params.ProductId

  return (
    <div> 
      <h4>Hello am a single product {ProductId}</h4>  
      {/* //productId is already (key value) is declared in main file */}
    </div>
  )
}

export default ProductDetails